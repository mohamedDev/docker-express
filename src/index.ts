import http from "http";
import app from "./app/app"

app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

server.listen(process.env.PORT || 3000);


/*
// server.ts

import http = require('http');
import os = require('os');
import fs = require('fs');

class HttpServer {
    nodePort: number;

    constructor (port: number) {
        this.nodePort = port;
    }

    onRequest(request: http.ServerRequest, response: http.ServerResponse) {
        console.log('New request: ' + request.url);

        fs.readFile('./index.html', (err: Error, data: Buffer) => {
            if (err) {
                throw err;
            }
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        });
    }

    onStart() {
        let httpServer = http.createServer(this.onRequest);
        httpServer.listen(this.nodePort);
        console.log('Server listenning on http://' + os.hostname() + ':' + this.nodePort + '/');
    }
}

let server = new HttpServer(8080).onStart();

https://typescript.developpez.com/actu/101684/Ecrire-une-application-NodeJS-avec-TypeScript-par-Yahiko/
*/
