import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './tabs_and_accordians.routes';
import TabsAndAccordiansController from './tabs_and_accordians.controller';

export default angular.module('app.tabs_and_accordians', [uirouter])
  .config(routing)
  .controller('TabsAndAccordiansController', TabsAndAccordiansController)
  .name;
