const express = require("express"),
    router = express.Router(),
    albumCtrl = require('./album-controller');

router.get('/get/table', albumCtrl.getAlbums);
router.put('/update/:number/:data', albumCtrl.getAlbums);
router.post('/post/update', albumCtrl.updateAll);

module.exports = router;