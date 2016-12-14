let config = require('./initConfig.js');
let angular = require('angular');
let ngRouter = require('angular-route');
const uiBootstrap = require('angular-ui-bootstrap');

// import 'jquery';
import 'bootstrap-loader';

// require('jquery');


const app = angular.module(config.name, [uiBootstrap,'config']);
angular.element(document).ready( () => {
   angular.bootstrap(document, [config.name]
//    ,{
//        strictDi: true
//    }
   );
});
