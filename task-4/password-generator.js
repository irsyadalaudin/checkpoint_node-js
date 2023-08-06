const generator = require('generate-password');

const randomPassword = generator.generate({
    length: 15,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
})

console.log(randomPassword)