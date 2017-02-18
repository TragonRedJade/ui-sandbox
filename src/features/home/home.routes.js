export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/?testing',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'vm'
    });
}
