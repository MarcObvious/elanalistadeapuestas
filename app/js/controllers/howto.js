function HowtoCtrl($log, $state) {
    'ngInject';

    // ViewModel
    const vm = this;

    vm.title = 'Howto Page!';
    vm.content = 'It\'s already under construction! see you soon!';
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
