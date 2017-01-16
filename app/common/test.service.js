import BaseRemoteService from './baseRemoteService.js';



class TestService extends BaseRemoteService {

    constructor(Restangular) {
        super(Restangular);

        this.Restangular = Restangular;
        console.log(Restangular);
    }


}


angular.module('Game')
    .service('TestService', TestService);

module.exports = TestService;