const mod = require('../models/artistsData');

exports.getAllArtists = function (req, res, next) {
    let artists = mod.getall();
    artists.then((data) => { 
        return res.json(data.rows);
    }).catch((err) => {
        console.log(err);
    });
}

exports.artistAdd = function (req, res, next) {
    let name = req.body.name;
    let about = req.body.about;
    let image = req.body.image;
    let addedArtist = mod.add(name, about, image);
    addedArtist.then((data) => {
        res.redirect('/');
    }).catch((err) => {
        console.log(err);
    })
}

exports.artistDelete = function (req, res, next) {
    let name = req.body.name;
    let about = req.body.about;
    let image = req.body.image;
    let deletedArtist = mod.delete(name, about, image);
    deletedArtist.then((data) => {
        res.redirect('/');
    }).catch((err) => {
        console.log(err);
    });
}