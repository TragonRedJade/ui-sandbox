import './stylesheets/bootstrap.css';
import './stylesheets/base.scss';
import './fonts/css/RedJadeIcons.css';
import 'adm-dtp/dist/ADM-dateTimePicker.css'
import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularbootstrap from 'angular-ui-bootstrap'
import sanitize from 'angular-sanitize';
import routing from './app.config';
import filters from './filters';
// import directives from './directives';
import home from './features/home';
import calendar from './features/calendar';
import lists from './features/lists';
import tabs_and_accordians from './features/tabs_and_accordians';



angular.module('app', [uirouter, angularbootstrap, sanitize, filters, home, calendar, lists, tabs_and_accordians])
  .config(routing)
  .config(function($locationProvider) {  $locationProvider.html5Mode(true); });



if(module.hot) {
  module.hot.accept();
}
