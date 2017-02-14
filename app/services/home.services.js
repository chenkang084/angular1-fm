import BaseRemoteService from './baseRemoteService.js';
import config from '../core/initConfig.js';
class HomeService extends BaseRemoteService {
    constructor(Restangular) {
        super(Restangular);
        this.Restangular = Restangular;
    }

    testSend() {

        let params = {
            'firstName': 'Kang',
            'lastName': 'Chen',
            'ntlogin': 'kanchen'
        };

        return this.doPost('initGoldCoins',params);
    }
}

angular.module(config.name)
    .service('HomeService', HomeService);