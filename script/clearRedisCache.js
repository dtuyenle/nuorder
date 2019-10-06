/* eslint-disable */

const redis = require('redis');
const fs = require('fs');
const yaml = require('js-yaml');

// Load env
const env = yaml.safeLoad(fs.readFileSync('./config/redis.yml', 'utf8'));

const clearRedisCache = (stage) => {
  const client = redis.createClient({
    host: env[stage].REDIS_URL,
    port: env[stage].REDIS_PORT,
    password: env[stage].REDIS_PASS,
    retry_strategy: options => {
      if (options.error && options.error.code === 'ECONNREFUSED') {
        // End reconnecting on a specific error and flush all commands with error
        return new Error('The server refused the connection');
      }
      if (options.total_retry_time > 1000 * 60 * 60) {
        // End reconnecting after a specific timeout and flush all commands with error
        return new Error('Retry time exhausted');
      }
      if (options.attempt > 10) {
        // End reconnecting with built in error
        return undefined;
      }
      // Reconnect after
      return Math.min(options.attempt * 100, 3000);
    },
  });

  client.keys('*', (err, keys) => {
    if (err) console.error(err);
    if (keys) {
      keys.forEach(row => client.del(row));
    }
    client.quit();
  });
};

clearRedisCache(process.argv[2]);
