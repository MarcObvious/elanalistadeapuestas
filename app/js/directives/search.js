function Search() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/search.html',
    scope: {
      title: '@',
      message: '@search',
      objsearch: '='
    },
    link: (scope) => {
      var init = function () {

      };
      init();
      scope.changeC = function (competition) {
        scope.objsearch.competition = competition;
      };
      scope.changeY = function (year) {
        scope.objsearch.year = year;
      };
      scope.changeR = function (round) {
        scope.objsearch.round = round;
      };

      scope.range = function (min, max, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) {
          input.push(i);
        }
        return input;
      };

      scope.doSearch = function () {
        console.log('directive!?');
        console.log(scope.search.competition);
        console.log(scope.search.team);
      };

    }
  };
}

export default {
  name: 'search',
  fn: Search
};
