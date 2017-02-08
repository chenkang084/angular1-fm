/**
 * import all  xx.component.js files
 * path:../services
 */
import '../common/components/modules.js';

let req = require.context('../components', true, /^.*\.component\.js$/igm);
req.keys().forEach(req);