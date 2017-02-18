import './stylesheets/bootstrap.css';
import './stylesheets/base.scss';
import 'adm-dtp/dist/ADM-dateTimePicker.css'
import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularbootstrap from 'angular-ui-bootstrap'
import sanitize from 'angular-sanitize';
import routing from './app.config';
import filters from './filters';
import home from './features/home';
import calendar from './features/calendar';



angular.module('app', [uirouter, angularbootstrap, sanitize, filters, home, calendar])
  .config(routing)
  .config(function($locationProvider) {  $locationProvider.html5Mode(true); });



if(module.hot) {
  module.hot.accept();
}
