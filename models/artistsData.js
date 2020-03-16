const db = require('../util/database');

function addArtist(name, about, image) {
    return db.query("INSERT INTO artists (name, about, image) VALUES ('" + name + "', '" + about + "', '" + image + "')")
}

function getAllArtists() {
    return db.query("SELECT * FROM artists");
}

function deleteArtist(name, about, image) {
    return db.query("DELETE FROM artists WHERE name = '" + name + "' AND about = '" + about + "' AND image = '" + image + "'");
}

module.exports = {
    add: addArtist,
    getall: getAllArtists,
    delete: deleteArtist
}