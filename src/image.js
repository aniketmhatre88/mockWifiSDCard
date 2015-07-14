/**
 * Created by aniketm on 7/13/15.
 */

var common = require('./common.js');

module.exports = {

    getFile: function(filePath) {
        res.sendFile(common.getBasePath() + filePath);
    },

    getThumbnail: function(filePath) {
        res.sendFile(common.getBasePath() + '/thumbnails' +filePath);
    }
};
