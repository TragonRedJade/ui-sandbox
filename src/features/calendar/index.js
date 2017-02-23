import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './calendar.routes';

require('fullcalendar');
require('../../stylesheets/fullcalendar.css');
require('angular-ui-calendar');

import CalendarController from './calendar.controller';

export default angular.module('app.calendar', [uirouter, 'ui.calendar'])
  .config(routing)
  .controller('CalendarController', CalendarController)
  .name;
