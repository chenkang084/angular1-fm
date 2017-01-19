import './home.scss';
import angular from 'angular';
import config from '../../core/initConfig.js';
import BaseController from '../../common/base.controller.js';
import BaseComponent from '../../common/base.component.js';

/*@ngInject*/
class HomeController extends BaseController {

    constructor(HomeService, AppInitService, $rootScope, $q) {
        //you need inject the AppInitService to Parent class(BaseController) 
        //so that BaseController can get the AppInitService
        super(AppInitService, $rootScope);
        this.HomeService = HomeService;
        this.AppInitService = AppInitService;
        this.$rootScope = $rootScope;
        this.$q = $q;
        console.log('home');

    }

    /**
     * @returns {promise} you must return a promise object 
     * so that BaseComponent can async execute other code
     * note:you must use `resolve or reject` makes sure the 
     * BaseController can execute then function
     */
    initialize() {
        return new Promise((resolve, reject) => {
            console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^home controller initPage')
            this.HomeService.testSend().then((data) => {
                console.log(data)
            })
            resolve();
        })
    }

    bindView() {
        console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%home bindaction')
    }

    bindAction(){
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> home bindAction");
        return {

        }
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