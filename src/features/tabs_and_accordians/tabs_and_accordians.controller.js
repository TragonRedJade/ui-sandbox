export default class TabsAndAccordiansController {
  constructor($window) {
    this.tabs = [
      { title:'Dynamic Title 1', content:'Dynamic content 1' },
      { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];

    this.alertMe = function() {
      setTimeout(function() {
        $window.alert('You\'ve selected the alert tab!');
      });
    };

    this.model = {
      name: 'Tabs'
    };
  }
}
