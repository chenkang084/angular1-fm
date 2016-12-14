let config = require('../../core/initConfig.js');
let angular = require('angular');
require('./home.scss');

import name from './test.js';

console.log(name)

angular.module(config.name)
.directive('home', function() {
  return {
    template: require('./home.html')
  };
});