let http = require('http')
let express = require('express')

//enter http://localhost:3000/
http
  .createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('Hello, My Server!')
    response.end()
  })
  .listen(3000)

console.log('hello')
