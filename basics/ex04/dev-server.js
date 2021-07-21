import http from 'http';
import express from 'express';
import * as path from 'path';

const port = 8080;

// Application Setup
const application = express()
    .use(express.static(path.join(path.resolve('.'), 'public')));
    
//Server Setup
http.createServer(application).on('listening', function(){
    console.log(`Http Server running on port ${port}`);
}).listen(port);