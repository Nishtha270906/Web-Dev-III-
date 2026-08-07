const { name, age } = require('./data/myData');
require('dotenv').config();

console.log(`User Name: ${name}`);
console.log(`User Age: ${age}`);
console.log(`Server Port: ${process.env.PORT}`);