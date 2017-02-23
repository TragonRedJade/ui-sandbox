export default function routes($stateProvider) {
  $stateProvider
    .state('tabs_and_accordians', {
      url: '/tabs_and_accordians',
      template: require('./tabs_and_accordians.html'),
      controller: 'TabsAndAccordiansController',
      controllerAs: 'vm'
    });
}
