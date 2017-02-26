let angular = require('angular');
// import angular from 'angular';
let ngRouter = require('angular-route');
const routerConifg = require('./router.config.js');

angular.module("router", [ngRouter]).config(function($routeProvider, $locationProvider) {
    if (routerConifg != null && routerConifg.length > 0) {
        routerConifg.map((configItem, index) => {
            if (configItem.component) {
                // convert `ngModel` style to `ng-model` style
                let tag = configItem.component.replace(/([A-Z])/g, '-$1').toLowerCase();
                // tag = _.trim(tag, '-');
                configItem.params.template = `<${tag} component="${configItem.component}"></${tag}>`;
            }
            $routeProvider.when(configItem.url, configItem.params);
        })
    }

    $routeProvider.otherwise({
        template: "<h1></h1><p>Nothing has been selected,</p>"
    });

    // Set to use HTML5 mode, which removes the #! from modern browsers.
    // Only when config it and browser support HTML5 history API
    let isHtml5Mode = !!true && (window.history && 'pushState' in window.history);
    // $locationProvider.html5Mode(isHtml5Mode);
    // $locationProvider.hashPrefix('!');
});