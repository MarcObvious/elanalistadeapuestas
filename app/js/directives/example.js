function ExampleDirective() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/example.html',
    scope: {
      title: '@',
      message: '@exampleDirective'
    },
    link: (scope, element) => {
      console.log('puta');
      element.on('click', () => {
        window.alert('Element clicked: ' + scope.message);
      });
    }
  };
}

export default {
  name: 'exampleDirective',
  fn: ExampleDirective
};
