class AppInitService{

    constructor(){
        
    }

}

AppInitService.init = function(){
    console.log('static init function');
}

module.exports = AppInitService;