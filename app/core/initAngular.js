import config from './initConfig.js';
import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import ngAnimate from 'angular-animate';
import 'restangular';
// add bootstrap ui
import "bootstrap-loader";
import "font-awesome";
// import "./libs.scss";


const app = angular.module(config.name, [ngAnimate, 'restangular', 'config']);



require('../common/test.service.js');
// let t = new TestService();

// app.service('TestService',TestService);

angular.element(document).ready(() => {
    angular.bootstrap(document, [config.name], {
        strictDi: false
    });
});