// const Restangular = require('restangular');

class BaseRemoteService {

    constructor(Restangular,name) {
        this.Restangular = Restangular;
        this.name = 'jack';

        this.rest = this.getRest(Restangular);
    }

    test() {
        // alert();
    }

    getRest(Restangular) {
        return Restangular.all('');
    }

}

module.exports = BaseRemoteService;