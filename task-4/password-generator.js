const generatePassword = require('generate-password');

const generateRandomPassword = () => {
    const passwordOption = {
        length: 15,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true,
    };

    const password = generatePassword.generate(passwordOption)
    return password
}

console.log(generateRandomPassword())