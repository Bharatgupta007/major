const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: "mongodb+srv://<username>:<password>@address.mongodb.net/test?retryWrites=truee",
    secret : 'averycomplexsecret1568451346545614231',
    db : 'blog',
    s3accesskeyId: 'AKIAICFAKEKEYEWXRA',
    s3accesskeysecret: 'zX4fdtr6a8M/Tdfkvhndklv56fQwfK1L7qo2ISTHpM/U'
}