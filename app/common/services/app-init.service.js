/**
 * initialize the app 
 * you can write some init functions in the service 
 * all components will wait for the done function 
 * then invoke the component's functions 
 */
class AppInitService {
    constructor(config, InitService, $q, $http) {
        this.config = config;
        this.InitService = InitService;
        this.$q = $q;

    }


    /**
     * init the app
     */
    init() {

        this.addPromise(this.initUser());

        // this.addPromise(this.test());

        this.$q.all(promises).then((data) => {
            console.log(data);
        })
    }

    initUser() {
        return this.InitService.initUserInfo(this.config.user);
    }

    test() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('AppInitService test function end after 6s')
                resolve();
            }, 3000)
        })
    }

    /**
     * @param {object} add a promise object to the array
     * @return {promises} return the promise array
     */
    addPromise(promise) {
        return promises.push(promise);
    }

    /**
     * wait for all promise or async event go over
     * @return {promise}
     */
    done() {
        return this.$q.all(promises);
    }

}

/**
 * private property
 * since es6 don't support static property
 * only support static function
 */
let promises = [];

module.exports = AppInitService;