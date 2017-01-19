import AppInitService from './app-init.service.js';
import config from '../../core/initConfig.js';

angular.module(config.name)
    .service('AppInitService', AppInitService);