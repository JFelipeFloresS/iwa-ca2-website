const baseAPILink = "https://8000-jfelipefloress-iwaca2-d65r0a2dg4m.ws-eu38.gitpod.io/albums",
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
    $.ajax({
        type: "PUT",
        url: baseAPILink + req.params.number,
        data: req.params.data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            if (data.status == 'OK') notification({ title: 'Success', message: 'Album has been update' });
            else badNotification({ title: 'Error', message: 'Failed updating album: ' + data.status + ', ' + data.errorMessage });
        }
    });
};

exports.updateAll = function (req, res) {
    // TODO botar p dar o update em tudo
}