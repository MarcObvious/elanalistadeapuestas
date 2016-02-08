function HowtoCtrl($log, $modal) {
    'ngInject';

    // ViewModel
    const vm = this;

    vm.title = 'Howto Page!';
    vm.content = 'It\'s already under construction! see you soon!';
    $log.debug(vm);

}

export default {
    name: 'HowtoCtrl',
    fn: HowtoCtrl
};
