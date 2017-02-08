/**
 * for compatible ie browser and need ie > 8
 */

let Promise;

if (window.Promise) {
    Promise = window.Promise;
} else {
    Promise = require('bluebird');
}

module.exports = Promise;