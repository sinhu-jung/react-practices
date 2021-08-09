## React Practices - Integration(개발 환경 통합)

## Configuration
1. Application Structure
    <pre>
        /app
          | --- /backend
          |         | --- /logging
          |         |         | --- index.js
          |         | --- /routes
          |         |         | --- [index.js]
          |         |         | --- authorized.js   
          |         |         | --- error.js
          |         | --- /controllers
          |         | --- /models
          |         | --- /views
          |         |        | --- /error
          |         |                | --- [404.ejs]
          |         |                | --- [500.ejs]
          |         | --- /public
          |         | --- [index.js]
          |         | --- [app.config.env]
          | --- /frontend
          |         | --- /config
          |         |        | --- babel.config.json
          |         |        | --- webpack.config.json
          |         | --- /public
          |         |        | --- favicon.ico
          |         |        | ---  index.html
          |         | --- /src
          |         | --- /assets
          | --- /node_modules
          | --- package.json
          | --- package-lock.json
    </pre>
2. nodemon
3. webpack dev server
4. package.json
5. node application

## Application
1. App01:Emaillist(node + react) = React(Frontend) Dev Integration With Node(Backend)
    - 개발 통합 설정 (With Node Backend)
    - backend: Fully API (Node Express기반)
    - Frontend: React (SPA)
    - AJAX: fetch 기반

2. App02:Kanban(node + react) = React(Frontend) Dev Integration With Node(Backend)
3. App03:Guestbook(node + react) = React(Frontend) Dev Integration With Node(Backend)
4. App04:Gallery(node + react) = React(Frontend) Dev Integration With Node(Backend)
5. App05:mysite(App03, App04) = React(Frontend) Dev Integration With Node(Backend)
-----------------------------------------------------------------------------------------