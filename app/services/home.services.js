import BaseRemoteService from './BaseRemoteService.js';
import config from '../core/initConfig.js';
class HomeService extends BaseRemoteService {
    constructor(Restangular){
        super(Restangular);
        this.Restangular = Restangular;
    }
}

angular.module(config.name)
    .service('HomeService', HomeService);