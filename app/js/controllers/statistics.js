function StatisticsCtrl($log) {
    'ngInject';

    // ViewModel
    const vm = this;

    vm.title = 'Statistics Page';
    vm.content = 'It\'s already under construction! see you soon!';
    $log.debug(vm);

}

export default {
    name: 'StatisticsCtrl',
    fn: StatisticsCtrl
};
