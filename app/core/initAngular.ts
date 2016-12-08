let config = require('./initConfig.ts');
let angular = require('angular');
const app = angular.module(config.name, []);

angular.element(document).ready( () => {
   angular.bootstrap(document, [config.name], {
       strictDi: true
   });
});