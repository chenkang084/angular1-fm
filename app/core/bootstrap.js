/**
 * Created by kanchen on 07/12/2016.
 * bootstrap app 
 * 
 */
// import '../config/router.js';
// import './initAngular.js';
// import './services.js';
// import './component.js';
import config from './initConfig.js';
// import angular from 'angular';
// import './libs.scss';
// require('es6-promise').polyfill();

// angular.element(document).ready(() => {
//     angular.bootstrap(document, [config.name], {
//         strictDi: false
//     });
// });


console.log(config);

angular.module(config.name).directive('home', function() {
    return {
        restrict: 'E',
        template: '<div>Hi there</div>',
        replace: true
    };
});