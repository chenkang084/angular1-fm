class AppInitService {

    constructor() {
        console.log(privateName);

        this.hello = this.hello.bind(this);
    }

    hello(){
        console.log('public function say hello');
    }
    
    

}

/**
 * private property
 */
let privateName = 'jack';

function _say(){
    console.log('private function');
}

/**
 * static function
 */
AppInitService.init = function() {
    console.log('static init function');
}

module.exports = AppInitService;