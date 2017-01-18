import config from './initConfig.js';
import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import ngAnimate from 'angular-animate';
import 'restangular';
import "bootstrap-loader"; // add bootstrap ui
import "font-awesome";


const app = angular.module(config.name, [ngAnimate, 'restangular','router'])
    .constant('config', config)
    .config(($provide, $httpProvider, RestangularProvider) => {
        // Restangular base url
        RestangularProvider.setBaseUrl(config.uri.api);

        // Global http error handler
        $httpProvider.interceptors.push(($timeout, $q, $rootScope, $location) => {
            return {
                request: (config) => {
                    return config || $q.when(config)
                },
                responseError: (response) => {
                    // if (response.data && response.data.message) {
                    //     let tplErrorHandler = require('../common/partials/error_handler.html');
                    //     $rootScope.Util.createDialog(tplErrorHandler, { message: response.data.message }, angular.noop)
                    // }
                    return $q.reject(response);
                }
            };
        });
    })
    .run((AppInitService) => {

        AppInitService.init();
    })