import './home.scss';
import angular from 'angular';
import config from '../../core/initConfig.js';
import BaseController from '../../common/base.controller.js';
import BaseComponent from '../../common/base.component.js';

/*@ngInject*/
class HomeController extends BaseController {

    constructor(HomeService) {
        super();



        console.log();
        // this.test = 'jack';
        // this.status = true;


    }

    // test = 'rose';

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

console.log();

// angular.module(config.name)
//     .directive('home', function() {
//         return {
//             controller: ['$scope', function($scope) {
//                 $scope.test = 'jack';
//                 this.test = 'jack';
//                 this.status = true;

//                 this.change = function() {
//                     this.status = !this.status;
//                 }
//             }],
//             controllerAs: 'vm',
//             template: require('./home.html'),
//         };
//     });

angular.module(config.name)
    .directive('home', function() {
        return new HomePage();
    });