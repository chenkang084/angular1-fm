import './nav.scss';
import angular from 'angular';
import config from '../../core/initConfig.js';

angular.module(config.name)
    .directive('nav', function() {
        return {
            controller: ['$scope', function($scope) {
                console.log();
            }],
            template: require('./nav.html')
        };
    });