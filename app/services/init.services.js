import BaseRemoteService from './baseRemoteService.js';
import config from '../core/initConfig.js';

class InitService extends BaseRemoteService {

    constructor(Restangular) {
        super(Restangular);
    }

    initUserInfo(params) {
        return this.doGet('initGoldCoins', params)
    }
}

angular.module(config.name)
    .service('InitService', InitService);