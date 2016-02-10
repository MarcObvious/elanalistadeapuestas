function StatisticsCtrl($log, $state) {
    'ngInject';

    // ViewModel
    const vm = this;

    vm.title = 'Statistics Page';
    vm.content = 'It\'s already under construction! see you soon!';
    $log.debug(vm);

    vm.arrowUp = function(){
        $state.go('Howto', {}, {'location': true, 'reload': true});
    };
    vm.arrowDown = function(){
        $state.go('Home', {}, {'location': true, 'reload': true});
    };

}

export default {
    name: 'StatisticsCtrl',
    fn: StatisticsCtrl
};
