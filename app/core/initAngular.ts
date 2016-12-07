const angular = require('angular');
const app = angular.module('app', []);

const config = require('../config/config.local.ts');

angular.element(document).ready( () => {
   angular.bootstrap(document, ['app'], {
       strictDi: true
   });
});