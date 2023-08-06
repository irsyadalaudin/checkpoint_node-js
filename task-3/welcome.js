/* BLOCKING CODE */
const fs = require('fs')
const data = fs.readFileSync('3_welcome.txt')

console.log(data.toString())
console.log('program ended')