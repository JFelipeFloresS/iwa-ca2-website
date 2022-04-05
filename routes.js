const express = require("express"),
    router = express.Router(),
    albumCtrl = require('./album-controller');

router.get('/get/table', albumCtrl.getAlbums);

module.exports = router;