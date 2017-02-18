import angular from 'angular';
import PropsFilter from './props.filter';

export default angular.module('app.filters', [])
  .filter('PropsFilter', PropsFilter)
  .name;
