function StatementCtrl($log, $state) {
    'ngInject';

    // ViewModel
    const vm = this;

    vm.title = 'Statement Page';
    vm.content = 'It\'s already under construction! see you soon!';
    $log.debug(vm);

    vm.buttonClick = function(){
        $state.go('Home', {}, {'location': true, 'reload': true});
    }

}

export default {
    name: 'StatementCtrl',
    fn: StatementCtrl
};
