export default class ListViewItem {
  constructor() {
    this.template = '<div class="rj-list-view-item"><ng-transclude></ng-transclude></div>'
    this.restrict = 'EA';
    this.replace = true;
    this.transclude = true;
  }

  link(scope, element, attributes, controller) {
    debugger
    console.log(scope);
  }
}
