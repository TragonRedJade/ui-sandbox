export default function routes($stateProvider) {
  $stateProvider
    .state('calendar', {
      url: '/calendar',
      template: require('./calendar.html'),
      controller: 'CalendarController',
      controllerAs: 'vm'
    });
}
