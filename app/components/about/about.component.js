let config = require('../../core/initConfig.js');
let angular = require('angular');
const htmlTempate = require('./about.html');

angular.module(config.name)
.directive('about', function() {
  return {
    template: htmlTempate
  };
});