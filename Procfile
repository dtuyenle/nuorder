serverlessLocal: AWS_XRAY_CONTEXT_MISSING=LOG_ERROR NODE_ENV=development node --max_old_space_size=8096 --inspect ./node_modules/.bin/serverless offline start --dontPrintOutput
assetServer: http-server ./dist/public -p 8081 -c-1 -g
webpackWatch: npm run build:devWatch
