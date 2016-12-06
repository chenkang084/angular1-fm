import { greet } from './greeter';
declare var require: any;
const http = require('http');
const jquery = require('jquery');
const config = require('./config.json');
import * as data from './config.ts';

let main = require('./css/main.scss');


let deviceType: string = greet(' world!');

document.getElementById('root').innerHTML = deviceType;

console.log(config);