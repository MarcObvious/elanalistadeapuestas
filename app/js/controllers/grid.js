function GridCtrl($state, $uibModal, $scope) {
    'ngInject';

    // ViewModel
    const vm = this;

    var init = function() {
        vm.title = 'Matches';
        vm.subtitle = 'Chose wisely you match';
        vm.matchs = [];
        var i = Math.floor(Math.random()*30);
        for (i; i > 0; i--) {
            vm.matchs.push(
                {
                    title: 'Match '+i,
                    id: i,
                    team1: {name:'TEAM ' + Math.floor(Math.random()*100)},
                    team2: {name:'TEAM ' + Math.floor(Math.random()*100)}
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

    };

    vm.toggled = function(open) {
        console.log('Dropdown is now: ', open);
    };

    vm.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        vm.status.isopen = !vm.status.isopen;
    };

    vm.openModal = function (match) {
        $scope.modalInstance = $uibModal.open({
            templateUrl: 'modals/match.modal.html',
            controller: 'MatchModalCtrl as match',
            resolve: {
                match: match
            },
            size: 'lg',
            scope: $scope
        });

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
