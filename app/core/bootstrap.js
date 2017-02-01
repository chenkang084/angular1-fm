/**
 * Created by kanchen on 07/12/2016.
 * bootstrap app 
 * 
 */
import '../config/router.js';
import './initAngular.js';
import './services.js';
import './component.js';
import config from './initConfig.js';
import angular from 'angular';

<<<<<<< HEAD



=======
>>>>>>> master
angular.element(document).ready(() => {
    angular.bootstrap(document, [config.name], {
        strictDi: false
    });
});