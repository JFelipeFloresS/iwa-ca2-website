const express = require("express"),
    router = express.Router(),
    albumCtrl = require('./album-controller');

router.get('/get/table', albumCtrl.getAlbums);
router.put('/put/update/:number', albumCtrl.updateAlbum);
router.post('/post/update', albumCtrl.updateAll);

module.exports = router;