import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './lists.routes';
import listview from 'ui-listView'
import ListsController from './lists.controller';

export default angular.module('app.lists', [uirouter, listview])
  .config(routing)
  .controller('ListsController', ListsController)
  .name;
