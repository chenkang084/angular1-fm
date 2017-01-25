import BootstrapService from './services/bootstrap.service.js'


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

    bindAction(){

    }

    pageInit() {
        return new Promise((resolve) => {
            this.initialize().then(() => {
                console.log('base finished initialize')
                resolve();
            })
        })
    }


}

module.exports = BaseController;