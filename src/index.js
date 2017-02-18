import './stylesheets/bootstrap.css';
import './stylesheets/base.scss';
import 'adm-dtp/dist/ADM-dateTimePicker.css'
import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularbootstrap from 'angular-ui-bootstrap'
import sanitize from 'angular-sanitize';
import uiselect from 'ui-select';
import routing from './app.config';
import datepicker from 'adm-dtp';
import filters from './filters';
import home from './features/home';


angular.module('app', [uirouter, angularbootstrap, sanitize, uiselect, datepicker, filters, home])
  .config(routing);


if(module.hot) {
  module.hot.accept();
}
