const baseAPILink = "https://8000-jfelipefloress-iwaca2-d65r0a2dg4m.ws-eu38.gitpod.io/albums",
        request = require('request');

/**
 * Serves HTML content created based on the JSON file served by the API. 
 */
 exports.getAlbums =  function (req, res) {
    request(baseAPILink, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            let info = JSON.parse(body)
            res.send(info);
        } else {
            res.send(error);
        }
    });
};