const express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser');

const router = express(),
    server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, "views")));
router.use(require('./routes'));
router.use(bodyParser.json());

server.listen(
    process.env.PORT || 3000,
    process.env.IP || "0.0.0.0",
    function () {
        const addr = server.address();
        console.log("Server listening at", addr.address + ":" + addr.port);
    }
);