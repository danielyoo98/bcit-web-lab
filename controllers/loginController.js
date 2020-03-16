const mod = require('../models/loginData');

exports.checkUser = function (req, res, next) {
    const username = req.body.username.toLowerCase();
    const password = req.body.password.toLowerCase();
    let user = mod.check(username, password);
    user.then((result) => {
        if (result.rows.length !== 0) {
            req.session.loggedin = true;
            req.session.username = username;
            res.redirect('/home');
        } else {
            res.redirect('/login');
        }
    }).catch((err) => {
        console.log(err);
    });
}