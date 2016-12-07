
declare var require:any;
let req = require.context('../components', true, /^.*\.component\.ts$/igm);
req.keys().forEach(req);