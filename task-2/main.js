/* FIRST APPLICATION */
// IMPORT REQUIRED MODULE
const http = require('http')

// CREATE SERVER
const server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'text/white'})
    response.end('<h1>Hello </h1>')
})

// TESTING REQUEST & RESPONSE
server.listen(3000, () => {
    console.log('server running at http://localhost:3000/')
})