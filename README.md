# ts-test
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![ts-test](https://github.com/iamskyrabbit/ts-test/workflows/ts-test/badge.svg)](https://github.com/iamskyrabbit/ts-test/actions)
## Requirment
1. webpack
`$ npm install --save-dev webpack webpack-cli`
2. TypeScript
`$ npm install --save-dev typescript awesome-typescript-loader source-map-loader`
3. Express
`$ npm install --save express @types/express`
4. React
`$ npm install --save react react-dom @types/react @types/react-dom`
## How to use
```
$ ./node_modules/.bin/webpack --config webpack.client.config.js && webpack --config webpack.server.config.js
$ npm start
```
## Reference
- https://qiita.com/adibozu/items/a01cc79efc7e8c543aa1
- https://qiita.com/adibozu/items/e63144770f1fd48d6cd2