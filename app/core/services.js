/**
 * import all  xx.services.js files
 * path:../services
 */


let req = require.context('../services', true, /^.*\.services\.js$/igm);
req.keys().forEach(req);