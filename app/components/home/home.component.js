import './home.scss';
import angular from 'angular';
import config from '../../core/initConfig.js';

angular.module(config.name)
    .directive('home', function() {
        return {
            controller: ['$scope', function($scope) {
                $scope.test = 'jack';
                this.test = 'jack';
                this.status = true;

                this.change = function() {
                    this.status = !this.status;
                }
            }],
            controllerAs: 'vm',
            template: require('./home.html'),
        };
    });