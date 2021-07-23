## ex07: CRA로 만든 Application 직접 설정해서 만들어 보기

1. 프로젝트 생성
   ```bash
   $ mkdir ex07
   $ cd ex07
   $ npm init -y
   $ npm i -D webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react
   $ npm i -D file-loader css-loader style-loader
   $ npm i react react-dom
   ```
2. 프로젝트 디렉토리
   <pre>
     /ex07
       | --- package.json
       | --- package-lock.json
       | --- node-modules
       | --- public
       |        | --- assets
       |        |       | --- images
       |        |                | --- logo.svg [빌드 결과물]
       |        | --- index.html
       |        | --- bundle.js [빌드 결과물]
       |        | --- favicon.ico
       |      src
       |       | --- index.css
       |       | --- index.js
       |       | --- App.css
       |       | --- App.js
       |       | --- logo.svg
       | --- babel.config.json
       | --- webpack.config.js
   <pre>

3. scripts
   ```json
   {
      .
      .
      .
      "name": "ex07",
      "version": "1.0.0",
      "description": "",
      "type": "module",
      "main": "index.js",
      "scripts": {
         "start": "npx webpack serve --progress",
         "build": "npx webpack",
      }
      .
      .
      .
   }
   ```

4. webpack.config.js
   ```javascript
      const path = require('path');

      module.exports = {
         entry: path.resolve('src/index.js'),
         output: {
            path: path.resolve('public'),
            filename: 'bundle.js'
         },
         module: {
            rules: [{
                  test: /\.js/i,
                  exclude: /node_modules/,
                  loader: 'babel-loader'
            }, {
                  test: /\.css$/i,
                  use: ['style-loader', 'css-loader']
            }, {
                  test: /\.svg$/i,
                  loader: 'file-loader',
                  options: {
                     outputPath: '/assets/images',
                     name: '[name].[ext]'
                  }
            }]
         },
         devServer: {
            contentBase: path.resolve('public'),
            host: "0.0.0.0",
            port: 9999,
            inline: true,
            liveReload: true,
            hot: false,
            compress: true,
            historyApiFallback: true
         }
      } 
   ```
5. babel.config.json
   ```json
      {
         "presets": [["@babel/env", {
            "targets": {
                  "edge" : "89",
                  "ie" : "11",
                  "firefox" : "92",
                  "chrome" : "90",
                  "opera" : "76",
                  "safari": "15"
            }
         }], "@babel/react"]
      }
   ```

6. 빌드(번들링)
   ```bash
   $ npm run build
   ```

7. 테스트 서버 실행
   ```bash
   $ npm start
   ```