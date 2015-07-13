/**
 * Created by aniketm on 7/12/15.
 */

var express = require('shelljs/global');

var BASE_PATH =  '/Users/aniketm/mockWifiSDCard';

function getFileList(dir){
    var result = [];

    var rawOp = exec('ls -l ' + BASE_PATH + dir, {silent:true}).output;

    var list =rawOp.split('-rw-r-----@ 1 ').slice(1);

    list.forEach(function(fileInfo) {
        var infoArr = fileInfo.split(' ');
        result.push({
            directory: dir,
            filename: infoArr[8].replace('\n', ''),
            size: infoArr[4],
            attribute: '32',
            date: '17071',
            time: '28040'
        });
    });

    return result;
}

module.exports = {
    /**
     * op 101 returns count of files in SD card
     */
    '101': function(dir) {
        return ls(BASE_PATH + dir).length;
    },

    /**
     * op 100 returns list of files in the form <directory>,<filename>,<size>,<attribute>,<date>,<time>
     */
    '100': function(dir) {
        var infolist = getFileList(dir);

        var list = infolist.map(function(fileInfo) {
           return fileInfo.directory+','+fileInfo.filename+','+fileInfo.size+','+fileInfo.attribute+','+fileInfo.date+','+fileInfo.time;
        });

        return list.join('\n');
    }
};
