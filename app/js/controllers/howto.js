function HowtoCtrl($log, $state) {
    'ngInject';

    // ViewModel
    const vm = this;

    vm.title = 'Howto Page!';
    $log.debug(vm);

    vm.arrowUp = function(){
        $state.go('Statement', {}, {'location': true, 'reload': true});
    };
    vm.arrowDown = function(){
        $state.go('Statistics', {}, {'location': true, 'reload': true});
    };

}

export default {
    name: 'HowtoCtrl',
    fn: HowtoCtrl
};
