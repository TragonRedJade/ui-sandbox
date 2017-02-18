import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import uiselect from 'ui-select';
import datepicker from 'adm-dtp';

import HomeController from './home.controller';

export default angular.module('app.home', [uirouter, uiselect, datepicker])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
