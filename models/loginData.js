const db = require('../util/database');

function checkValidUser(user, pass) {
    return db.query("SELECT * FROM users WHERE username = '" + user + "' AND password = '" + pass + "'")
}

module.exports = {
    check: checkValidUser
}