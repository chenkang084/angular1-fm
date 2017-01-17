/**
 * import all  xx.component.js files
 * path:../services
 */

let req = require.context('../components', true, /^.*\.component\.js$/igm);
req.keys().forEach(req);