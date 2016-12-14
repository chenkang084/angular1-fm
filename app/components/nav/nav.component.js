import './nav.scss';
import angular from 'angular';
import config from '../../core/initConfig.js';

angular.module(config.name)
.directive('nav', function() {
  return {
    template: require('./nav.html')
  };
});