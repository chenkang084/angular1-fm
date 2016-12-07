/**
 * Created by kanchen on 07/12/2016.
 */
import './component.ts';
import './initAngular.ts';
declare var process: any;
let config: any = null;

let env = process.env.trim();
console.log('>>>',env);

if (env === 'local') {
    config = require('../config/config.local.ts');
} else if(env === 'qa'){
    config = require('../config/config.qa.ts');
}else{
    config = require('../config/config.prod.ts');
}

console.log(config);


