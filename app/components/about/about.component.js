import './about.scss';
import angular from 'angular';
import config from '../../core/initConfig.js';
import BaseController from '../../common/base.controller.js';
import BaseComponent from '../../common/base.component.js';

class AboutController extends BaseController {
    constructor(HomeService, AppInitService, $rootScope) {
        super(AppInitService);

        console.log('base')
            // this.test = 'jack';
            // this.status = true;


    }

    initPage() {
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^AboutController initPage')

        // resolve();
    }
}


class AboutPage extends BaseComponent {
    constructor() {
        super();
        this.controller = AboutController;
        this.template = require('./about.html');
    }
}


angular.module(config.name)
    .directive('about', function() {
        return new AboutPage();
    });