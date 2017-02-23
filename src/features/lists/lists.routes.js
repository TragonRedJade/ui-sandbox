export default function routes($stateProvider) {
  $stateProvider
    .state('lists', {
      url: '/lists',
      template: require('./lists.html'),
      controller: 'ListsController',
      controllerAs: 'vm'
    });
}
