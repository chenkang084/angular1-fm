import { greet } from './greeter';
declare var require: any;
const http = require('http');
const jquery = require('jquery');
const config = require('./config.json');


let main = require('./css/main.scss');


let deviceType: string = greet(' world!');

document.getElementById('root').innerHTML = deviceType;

console.log(config);