const { hash, compare } = require('bcrypt');

const pass = '123';

hash(pass, 8, (err, encrypted) => {
    console.log(encrypted);
})

compare('123', '$2a$08$bJE/iFdBbwGo83RzKigcZuUHD2cBeTPNtndmJeGV1XglFf/Dx5ghC', (err, same) => {
    console.log(same)
})