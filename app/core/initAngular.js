import angular from 'angular'
import ngAnimate from 'angular-animate'
import config from './initConfig.js'

// import uiBootstrap from 'angular-ui-bootstrap'

import 'restangular'
// import "bootstrap-loader"; // add bootstrap ui
import 'font-awesome'

// import BootstrapService from "../common/services/bootstrap.service.js";

angular
  .module(config.name, [ngAnimate, 'restangular', 'router'])
  .constant('config', config)
  .config(($provide, $httpProvider, RestangularProvider) => {
    // Restangular base url
    RestangularProvider.setBaseUrl(config.uri.api)

    // Global http error handler
    $httpProvider.interceptors.push(($timeout, $q) => {
      return {
        request: (_config) => {
          return _config || $q.when(_config)
        },
        responseError: (response) => {
          // if (response.data && response.data.message) {
          //     let tplErrorHandler = require('../common/partials/error_handler.html');
          //     $rootScope.Util.createDialog(tplErrorHandler, { message: response.data.message }, angular.noop)
          // }
          return $q.reject(response)
        },
      }
    })
  })
  .run((AppInitService) => {
    // console.log("=======================" + BootstrapService.resolve);

    // BootstrapService.resolve();
    // console.log("=======================" + BootstrapService.resolve);

    AppInitService.init()
  })
