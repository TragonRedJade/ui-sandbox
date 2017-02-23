import angular from 'angular';
import ListView from './rj_list_view.directive';
import ListViewItem from './rj_list_view_item.directive';


export default angular.module('app.directives', [])
  .directive('rjListView', ListView)
  .directive('rjListViewItem', ListViewItem)
  .name;
