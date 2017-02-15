import './home.scss';
import angular from 'angular';
import config from '../../core/initConfig.js';
import BaseController from '../../common/base/base.controller.js';
import BaseComponent from '../../common/base/base.component.js';

/*@ngInject*/
class HomeController extends BaseController {

    constructor(HomeService, AppInitService, $rootScope, $q, config) {
        //you need inject the AppInitService to Parent class(BaseController) 
        //so that BaseController can get the AppInitService
        super(AppInitService, $rootScope);
        this.HomeService = HomeService;
        this.AppInitService = AppInitService;
        this.$rootScope = $rootScope;
        this.$q = $q;
        this.pageName = 'home';

    }

    /**
     * @returns {promise} you must return a promise object 
     * so that BaseComponent can async execute other code
     * note:you must use `resolve or reject` makes sure the 
     * BaseController can execute then function
     */
    initialize() {
        let self = this;
        return new Promise((resolve, reject) => {
            console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^home controller initPage')
            self.HomeService.testSend().then((data) => {
                console.log(data)
            })
            resolve();
        })
    }

    /**
     * bindView function will invoke after initialize
     */
    bindView() {
        console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%home bindaction')
    }

    /**
     * bindAction is the highest priority invoke
     * bindView will invoke in BaseController constructor
     * so it invokes priority most highly
     * in summary,the invoke order is :
     *     --> bindAction
     *          --> initialize
     *              --> bindView
     */
    bindAction() {
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

angular.module(config.name)
    .component('home', new HomePage());