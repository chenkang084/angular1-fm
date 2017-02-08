import BaseController from '../../base/base.controller.js';
import BaseComponent from '../../base/base.component.js';
import angular from 'angular';
import config from '../../../core/initConfig.js';
import routers from '../../../config/router.config.js';
import './header.scss';

class HeaderController {
    constructor(AppInitService, $rootScope, config) {
        this.routers = routers;
        this.$rootScope = $rootScope;
        this.config = config;
    }


}


class HeaderComponent extends BaseComponent {
    constructor() {
        super();
        this.controller = HeaderController;
        this.template = require('./header.html');
    }


}

angular.module(config.name)
    .component('fmHeader', new HeaderComponent())



module.exports = HeaderComponent;