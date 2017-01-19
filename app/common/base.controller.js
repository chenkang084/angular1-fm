import BootstrapService from './services/bootstrap.service.js'


class BaseController {
    constructor(AppInitService) {

        console.log('base')

        AppInitService.done().then(() => {
            console.log('***************************app init end')

            //if the class has extended then invoke child initPage
            this.initPage();
        })

    }


    initPage() {
        console.log('+++++++++++++++++++base controller initPage')
    }

}

module.exports = BaseController;