function Example2Ctrl($log, $state) {
    'ngInject';

    // ViewModel
    const vm = this;

    vm.title = 'Example 2';
    vm.number = 151551515;
    $log.debug(vm);

    vm.buttonClick = function () {
        $log.debug("Click!");
        $state.go('Home', {}, {'location': true, 'reload': true});
    };
}

export default {
    name: 'Example2Ctrl',
    fn: Example2Ctrl
};
