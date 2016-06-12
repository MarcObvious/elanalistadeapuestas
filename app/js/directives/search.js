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
        scope.competitionname = 'All';
        scope.query = '';
        changeName(scope.objsearch.competition);
      };

      var changeName = function(competition){
        switch(competition){
          case '1':
            scope.competitionname = 'BBVA';
            break;
          case '8':
            scope.competitionname = 'Bundesliga';
            break;
          case '10':
            scope.competitionname = 'Premier';
            break;
          case '0':
            scope.competitionname = 'All';
            break;
        }
      };



      scope.changeC = function (competition) {
        scope.objsearch.competition = competition;
        changeName(competition);
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
        scope.objsearch.team = scope.query;
      };

      init();

    }
  };
}

export default {
  name: 'search',
  fn: Search
};
