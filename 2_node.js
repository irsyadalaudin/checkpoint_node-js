const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('<h1>Hello Node!!!!</h1>\n')
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
});


// const http = require('http');

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.end('<h1>Hello Node !!!!</h1>\n')
// });

// server.listen(3000)
// console.log('Server running at http://localhost:3000/')