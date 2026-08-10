// const { name, age } = require('./data/myData');
// require('dotenv').config();

// console.log(`User Name: ${name}`);
// console.log(`User Age: ${age}`);
// console.log(`Server Port: ${process.env.PORT}`);


const http = require('http');
const Port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello , World ! </h1>');
    res.end();
});

server.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
})