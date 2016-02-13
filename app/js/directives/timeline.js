function Timeline() {

    return {
        restrict: 'EA',
        templateUrl: 'directives/timeline.html',
        scope: {
            title: '@',
            message: '@timeline'
        },
        link: (scope) => {
            var init = function() {
                scope.datepicker = {};
                scope.datepicker.dateOptions = {formatYear: 'yy', startingDay: 1};
                scope.datepicker.format = 'dd-MM-yyyy';
                scope.datepicker.opened = false;
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

            scope.openDatepicker = function($event) {
                scope.datepicker.opened = true;
            };


        }
    };
}

export default {
    name: 'timeline',
    fn: Timeline
};
