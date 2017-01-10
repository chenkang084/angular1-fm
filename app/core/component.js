let req = require.context('../components', true, /^.*\.component\.js$/igm);
req.keys().forEach(req);