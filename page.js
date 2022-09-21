const http = require('http')
const fs = require('fs')
const port = 7000

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('page1.html', function(error, data){
        if (error){
            res.writeHead(404)
            res.write('chi darnum')
        } else {
            res.write(data)
        }
        res.end()
    })

})

server.listen(port, function(error){
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on portt' + port)
    }
})