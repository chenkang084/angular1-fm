class AppInitService {

    constructor(config, InitService, $q, $http) {
        this.config = config;
        this.InitService = InitService;
        this.$q = $q;

        this.hello = this.hello.bind(this);
    }

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

}

/**
 * private property
 */
let promises = [];
/**
 * private property
 */
function _say() {
    console.log('private function');
}

/**
 * static function
 */
// AppInitService.init = function() {

//     console.log('static ');

// }

module.exports = AppInitService;