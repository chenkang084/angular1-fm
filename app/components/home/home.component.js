import './home.scss';
import angular from 'angular';
import config from '../../core/initConfig.js';
import BaseController from '../../common/base.controller.js';
import BaseComponent from '../../common/base.component.js';

/*@ngInject*/
class HomeController extends BaseController {

    constructor(HomeService, AppInitService, $rootScope) {
        super(AppInitService);

        console.log('home');
        console.log('home');

        

    }

    initPage() {
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^home controller initPage')

        // resolve();
    }

    bindAction() {
        console.log('+++++++++++++++++++home bindaction')
    }

    change() {
        this.status = !this.status;
    }

}

class HomePage extends BaseComponent {
    constructor() {
        super();
        this.controller = HomeController;
        this.template = require('./home.html');
    }
}

let homePage = new HomePage();

/*
angular.module(config.name)
    .directive('home', function() {
        return {
            controller: ['$scope', function($scope) {
                $scope.test = 'jack';
                this.test = 'jack';
                this.status = true;

                this.change = function() {
                    this.status = !this.status;
                }
            }],
            controllerAs: 'vm',
            template: require('./home.html'),
        };
    });

angular.module(config.name)
    .directive('home', function() {
        return new HomePage();
    });
*/

angular.module(config.name)
    .component('home', new HomePage());