const express = require('express');
const router = express.Router();
const artistsController = require('../controllers/artistsController');

router.get('/artists', artistsController.getAllArtists);

router.post('/artists/add', artistsController.artistAdd);

router.post('/artists/delete', artistsController.artistDelete);

module.exports = router;
