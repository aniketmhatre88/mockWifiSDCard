/**
 * Created by aniketm on 7/11/15.
 */

var express = require('express');
var app = express();

var operations = require('./operations.js');
var common = require('./common.js');

app.get('/command.cgi', function (req, res) {
    res.send(operations[req.query.op](req.query.DIR).toString());
});

app.get('/thumbnail.cgi', function (req, res) {
    res.sendFile(common.getBasePath() + '/thumbnails/' + Object.keys(req.query)[0]);
});

app.get('/*', function (req, res) {
    res.sendFile(common.getBasePath() + '/' + req.params[0]);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});
