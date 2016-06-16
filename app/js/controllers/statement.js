function StatementCtrl($log, $state) {
    'ngInject';

    // ViewModel
    const vm = this;

    vm.title = 'Statement Page';
    vm.content = 'It\'s already under construction! see you soon!';

    vm.arrowUp = function(){
        $state.go('Home', {}, {'location': true, 'reload': true});
    };
    vm.arrowDown = function(){
        $state.go('Grid', {}, {'location': true, 'reload': true});
    };

}

export default {
    name: 'StatementCtrl',
    fn: StatementCtrl
};
