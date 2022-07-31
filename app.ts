import 'reflect-metadata';
import application from './Application';
import * as http from 'http';

const PORT = 3000;

const server = http.createServer(application.instance);

server.listen(PORT, () => {
    console.log('server on port ' + PORT);
});