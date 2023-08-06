/* NON BLOCKING CODE (CALLBACK FUNCTION)*/
const fs = require('fs')

fs.readFile('welcome.txt', (err, data) => {
    if(err) {
        return console.error(err)
    }
    console.log(data.toString())
})

console.log('program ended')