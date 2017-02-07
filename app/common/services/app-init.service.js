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


<<<<<<< HEAD
    constructor(config, InitService, $q, $http) {
        this.config = config;
        this.InitService = InitService;
        this.$q = $q;
=======
    /**
     * init the app
     */
    init() {
>>>>>>> master

        this.addPromise(this.initUser());

        this.addPromise(this.test());

        this.$q.all(promises).then((data) => {
            console.log(data);
        })
    }

<<<<<<< HEAD
    hello() {
        console.log('public function say hello');
    }


    init() {
        console.log('init');

        this.addPromise(this.initUser());
        this.addPromise(this.initUser());
        this.addPromise(this.testPromise());
        

        this.$q.all(promises).then((data) => {
            console.log(data);
        })

        console.log('............add promise has ended!');
    }

    initUser() {
        // return this.InitService.initUserInfo(this.config.user)
        //     .then((data) => {
        //         console.log(data)
        //     })
        return this.InitService.initUserInfo(this.config.user);
    }

    initUser2() {
        return this.InitService.initUserInfo(this.config.user)
            .then((data) => {
                console.log(data)
            })
    }

    testPromise() {
        return new Promise((resolve, reject) => {

            setTimeout(()=>{
                resolve('testPromise end');
            },3000)
            
        })
    }

    addPromise(promise) {
        return promises.push(promise);
    }
=======
    initUser() {
        return this.InitService.initUserInfo(this.config.user);
    }
>>>>>>> master

    test() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('AppInitService test function end after 6s')
                resolve();
            }, 3000)
        })
    }

<<<<<<< HEAD
/**
 * private property
 */
let promises = [];
/**
 * private property
 */
function _say() {
    console.log('private function');
=======
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

>>>>>>> master
}

/**
 * private property
 * since es6 don't support static property
 * only support static function
 */
<<<<<<< HEAD
// AppInitService.init = function() {

//     console.log('static ');

// }
=======
let promises = [];
>>>>>>> master

module.exports = AppInitService;