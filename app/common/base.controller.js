import BootstrapService from './services/bootstrap.service.js'
// import { np as NprogressService } from './services/nprogress.service.js'

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
        return new Promise((resolve) => {
            resolve();
        })
    }

    bindView() {
        console.log('>>>>>>>>>>>>>>>>>>>>>home bindaction')
    }

    bindAction() {

    }

    pageInit() {
        return new Promise((resolve) => {
            NprogressService.start();
            this.initialize().then(() => {
                console.log('base finished initialize')

                NprogressService.done();
                resolve();
            })
        })
    }


}

module.exports = BaseController;