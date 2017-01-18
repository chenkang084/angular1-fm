/**
 * import all  xx.services.js files
 * path:../services
 */
// import '../common/services/modules.js';
import AppInitService from '../common/services/app-init.service.js';

AppInitService.init();

var a = new AppInitService();

a.hello();


console.log();

let req = require.context('../services', true, /^.*\.services\.js$/igm);
req.keys().forEach(req);