function GridCtrl($log, $state) {
    'ngInject';

    // ViewModel
    const vm = this;

    var init = function() {
        vm.title = 'Matches';
        vm.subtitle = 'Chose wisely you match';
        vm.matchs = [];
        var i = 0;
        for (i; i < 15; i++) {
            vm.matchs.push(
                {
                    title: 'Math '+i,
                    id: i,
                    team1: 'TEAM 1',
                    team2: 'TEAM 2'
                }
            );
        }
        vm.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];

        vm.status = {
            isopen: false
        };

        vm.toggled = function(open) {
            console.log('Dropdown is now: ', open);
        };

        vm.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !vm.status.isopen;
        };



    };
    init();

   // vm.content = 'It\'s already under construction! see you soon!';

    vm.arrowUp = function(){
        $state.go('Statement', {}, {'location': true, 'reload': true});
    };
    vm.arrowDown = function(){
        $state.go('Statistics', {}, {'location': true, 'reload': true});
    };

}

export default {
    name: 'GridCtrl',
    fn: GridCtrl
};
