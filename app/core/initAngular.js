import config from './initConfig.js';
import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import ngAnimate from 'angular-animate';
// add bootstrap ui
import "bootstrap-loader";

const app = angular.module(config.name, [uiBootstrap,ngAnimate,'config']);
angular.element(document).ready( () => {
   angular.bootstrap(document, [config.name]
//    ,{
//        strictDi: true
//    }
   );
});
