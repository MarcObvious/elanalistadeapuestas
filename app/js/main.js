import angular from 'angular';
var uibs = require('../../node_modules/angular-ui-bootstrap');
// angular modules
import constants from './constants';
import onConfig  from './on_config';
import onRun     from './on_run';
import 'angular-ui-router';
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';

// create and bootstrap application
const requires = [
  'ui.router',
  'ui.bootstrap',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives',
  uibs
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
