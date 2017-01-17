/**
 * import all  xx.services.js files
 * path:../services
 */
import '../common/services/modules.js';

let req = require.context('../services', true, /^.*\.services\.js$/igm);
req.keys().forEach(req);