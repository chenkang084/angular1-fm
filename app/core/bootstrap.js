/**
 * Created by kanchen on 07/12/2016.
 * bootstrap app 
 * 
 */
import angular from 'angular'
import config from './initConfig.js'
import '../config/router.js'
import './initAngular.js'
import './services.js'
import './component.js'
import './libs.scss'

require('es6-promise').polyfill()

angular.element(document).ready(() => {
  angular.bootstrap(document, [config.name], {
    strictDi: false,
  })
})
