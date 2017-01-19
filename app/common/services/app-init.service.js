class AppInitService {

    constructor(config, InitService, $q, $http) {
        this.config = config;
        this.InitService = InitService;
        this.$q = $q;

        this.hello = this.hello.bind(this);

        console.log('&&&&&&&&&&&&&&&&&&& AppInitService constructor');
    }

    hello() {
        console.log('public function say hello');
    }


    init() {
        console.log('init');

        this.addPromise(this.initUser());
        

        this.$q.all(promises).then((data) => {
            console.log(data);
        })

        console.log('............add promise has ended!');
    }

    initUser() {
        return this.InitService.initUserInfo(this.config.user);
    }


    addPromise(promise) {
        return promises.push(promise);
    }

    done(){
        return this.$q.all(promises);
    }

}

/**
 * private property
 */
let promises = [];
/**
 * private property
 */


/**
 * static function
 */
// AppInitService.init = function() {

//     console.log('static ');

// }

module.exports = AppInitService;