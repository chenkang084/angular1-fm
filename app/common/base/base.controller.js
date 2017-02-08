// import BootstrapService from './services/bootstrap.service.js'
import Promise from '../services/promise.service.js';
import Config from '../../core/initConfig.js';
let NprogressService = require('../services/nprogress.service.js');

class BaseController {
    constructor(AppInitService, $rootScope, config) {
        this.$rootScope = $rootScope;
        let self = this;
        this.actions = this.bindAction();

        AppInitService.done().then(() => {
            console.log('***************************app init service end')

            //if the class has extended then invoke child initPage
            self.pageInit().then(() => {
                self.$rootScope.$apply(() => {
                    self.bindView();
                })
            })

            if (Config.debug == true) {
                window['vm'] = self;
                window['rootScope'] = $rootScope;
            }
        })



    }

    initialize() {
        let self = this;
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
        let self = this;
        return new Promise((resolve) => {
            NprogressService.start();
            self.initialize().then(() => {
                console.log('base finished initialize')

                NprogressService.done();
                resolve();
            })
        })
    }


}

module.exports = BaseController;