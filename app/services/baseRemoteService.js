/**
 * base service
 * 
 */
class BaseRemoteService {

    constructor(Restangular, name) {
        this.Restangular = Restangular;
    }


    getRest(Restangular) {
        return Restangular.all('');
    }

    doGet(method, params) {
        return this.Restangular.one(method).get(params);
    }

    doPost(method, params) {
        return this.Restangular.all(method).post(params);
    }



}

module.exports = BaseRemoteService;