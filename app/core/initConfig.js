let config = null
const env = process.env.trim()
// console.log('>>>',env);
if (env === 'local') {
  config = require('../config/config.local.js')
} else if (env === 'qa') {
  config = require('../config/config.qa.js')
} else {
  config = require('../config/config.prod.js')
}

// console.log(config);

module.exports = config
