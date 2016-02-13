function Search() {

    return {
        restrict: 'EA',
        templateUrl: 'directives/search.html',
        scope: {
            title: '@',
            message: '@search'
        },
        link: (scope, element) => {
            var init = function() {
                scope.search = {};
                scope.search.team = '';
                scope.search.competition = '0';
            };
            init();
            scope.change = function(competition) {
                scope.search.competition = competition;
            };
            scope.doSearch = function() {
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
