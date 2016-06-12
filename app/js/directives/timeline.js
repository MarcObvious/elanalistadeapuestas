function Timeline() {

    return {
        restrict: 'EA',
        templateUrl: 'directives/timeline.html',
        scope: {
            title: '@',
            message: '@timeline',
            date: '='
        },
        link: (scope) => {
            var init = function() {
                scope.datepicker = {};
                scope.datepicker.dateOptions = {formatYear: 'yy', startingDay: 1};
                scope.datepicker.format = 'dd-MM-yyyy';
                scope.datepicker.opened = false;
            };
            init();

            //$event
            scope.openDatepicker = function() {
                scope.datepicker.opened = true;
            };


        }
    };
}

export default {
    name: 'timeline',
    fn: Timeline
};
