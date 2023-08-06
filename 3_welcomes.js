/* NON BLOCKING CODE */
const fs = require('fs')

fs.readFileSync('3_welcome.txt', (err, data) => {
    if(err) {
        return console.error(err)
    }
    console.log(data.toString())
})

console.log('program ended')