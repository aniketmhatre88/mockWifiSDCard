/**
 * Created by aniketm on 7/12/15.
 */

var express = require('shelljs/global');

var BASE_PATH =  '/Users/aniketm/mockWifiSDCard';

module.exports = {
    /**
     * op 101 returns count of files in SD card
     */
    '101': function(dir) {
        var path = BASE_PATH + dir;
        return ls(path).length;
    }
};
