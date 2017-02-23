export default class ListView {
  constructor() {
    this.template = '<div class="rj-list-view"><ng-transclude></ng-transclude></div>'
    this.restrict = 'E';
    this.replace = true;
    this.transclude = true;
    this.scope = true;
  }

  link(scope, element, attributes, controller) {
    console.log(scope);
  }
}
