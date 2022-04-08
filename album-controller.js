const baseAPILink = "https://8000-jfelipefloress-iwaca2-d65r0a2dg4m.ws-eu38.gitpod.io/albums/",
    request = require('request'),
    axios = require('axios');

/**
 * Serves HTML content created based on the JSON file served by the API. 
 */
exports.getAlbums = function (req, res) {
    request(baseAPILink, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let info = JSON.parse(body)
            res.send(info);
        } else {
            res.send(error);
        }
    });
};

exports.updateAlbum = function (req, res) {
    axios
    .put(baseAPILink + req.params.number, req.body)
    .then((response) => {
        console.log(response.data);
      }).catch((err) => {
        console.error(err);
    });
};

exports.updateAll = function (req, res) {
    // TODO botar p dar o update em tudo
}