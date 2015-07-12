/**
 * Created by aniketm on 7/11/15.
 */

var express = require('express');
var app = express();

var operations = require('./operations.js');

app.get('/command.cgi', function (req, res) {
    res.send(operations[req.query.op](req.query.DIR).toString());
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});
