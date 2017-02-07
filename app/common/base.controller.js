// import BootstrapService from './services/bootstrap.service.js'
import Promise from './services/promise.service.js';
let NprogressService = require('./services/nprogress.service.js');

class BaseController {
    constructor(AppInitService, $rootScope) {
        this.$rootScope = $rootScope;
        let self = this;
        this.actions = this.bindAction();
        console.log('base')

        AppInitService.done().then(() => {
            console.log('***************************app init service end')

            //if the class has extended then invoke child initPage
            self.pageInit().then(() => {
                self.$rootScope.$apply(() => {
                    self.bindView();
                })
            })
        })

    }

    initialize() {
        let self = this;
        return new Promise(function(resolve) {
            resolve();
        })
    }

    bindView() {
        console.log('>>>>>>>>>>>>>>>>>>>>>home bindaction')
    }

    bindAction() {

    }

    pageInit() {
        let self = this;
        console.log('>>>>>>>>>>>>>>>>>>>>>pageInit+++++++++++++=')
        return new Promise(function(resolve) {
            NprogressService.start();
            self.initialize().then(function() {
                console.log('base finished initialize')

                NprogressService.done();
                resolve();
            })
        })

        // return new Promise(function(resolve) {

        //     resolve();
        // })
    }


}

module.exports = BaseController;