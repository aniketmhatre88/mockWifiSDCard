/**
 * Created by aniketm on 7/13/15.
 */

var express = require('shelljs/global');

module.exports = {
    getBasePath: function() {
        return pwd().replace(/\/src$/, '');
    }
};