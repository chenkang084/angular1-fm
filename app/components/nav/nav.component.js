let config = require('../../core/initConfig.js');
let angular = require('angular');
require('./nav.scss');

angular.module(config.name)
.directive('nav', function() {
  return {
    template: require('./nav.html')
  };
});