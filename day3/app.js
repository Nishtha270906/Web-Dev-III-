const http = require('http');

const server = http.createServer(req , res =>{
    if (req.url === '/') {
        res.writeHead ( 200 , { 'Content-Type': 'type/html'});
        res.end
            <h1 style = 'color: navy '> Hello from Node.js</h1>
    
    }else{
    res.writeHead(404 , {'Content-Type :' 'application/json'})
})