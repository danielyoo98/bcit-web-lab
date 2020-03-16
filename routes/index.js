const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const { ensureAuth, forwardAuth } = require('../config/auth');

router.get('/', ensureAuth, (req, res) => {
    res.redirect('/home');
})

router.get('/home', ensureAuth, (req, res) => {
    res.render('home', { homeLinks: true });
})

router.get('/login', forwardAuth, (req, res) => {
    res.render('login', { loginCSS: true });
})

router.post('/login', loginController.checkUser);

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            throw err;
        } else {
            return res.redirect('/');
        }
    })
})

module.exports = router;
