/* eslint-disable */

const http = require('http');
const httpProxy = require('http-proxy');
const fs = require('fs');
const yaml = require('js-yaml');

const proxy = httpProxy.createProxyServer({});

const env = yaml.safeLoad(fs.readFileSync('./config/urls.yml', 'utf8'));
const spotlightUrl = env.dev.SPOTLIGHT_URL;
const spotlightApi = env.dev.SPOTLIGHT_API_PROXY;
const mainsiteUrl = env.dev.MAIN_SITE_URL;

proxy.on('error', (err) => {
  console.log(err);
});

proxy.on('proxyRes', (proxyRes) => {
  proxyRes.headers['Access-Control-Allow-Origin'] = '*';
});

const server = http.createServer((req, res) => {
  if (req.url.includes('/rest/')) {
    // public api proxy pass
    proxy.web(req, res, {
      target: spotlightApi,
      changeOrigin: true,
    });
  } else if (req.url.includes('/p/')) {
    // spotlight page proxy pass
    proxy.web(req, res, {
      target: spotlightUrl,
      changeOrigin: true,
    });
  } else {
    // main site capterra
    proxy.web(req, res, {
      target: mainsiteUrl,
      changeOrigin: true,
    });
  }
});

console.log('proxy listening on port 5050');
server.listen(5050);
