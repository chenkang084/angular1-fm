import './home.scss';
import angular from 'angular';
import config from '../../core/initConfig.js';

angular.module(config.name)
  .controller('CollapseDemoCtrl', ['$scope', function ($scope) {
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
  }])
  .directive('home', function () {
    return {
      template: require('./home.html'),
    };
  });

// angular.module(config.name)
//   .controller('CollapseDemoCtrl', function ($scope) {
//     $scope.isNavCollapsed = true;
//     $scope.isCollapsed = false;
//     $scope.isCollapsedHorizontal = false;
//   })
//   .directive('home', function () {
//     return {
//       template: require('./home.html'),
//     };
//   });