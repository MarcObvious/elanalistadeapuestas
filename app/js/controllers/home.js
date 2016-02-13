function HomeCtrl($log, $state) {
    'ngInject';

    // ViewModel
    const vm = this;
    var init = function() {
        vm.subtitle = 'The';
        vm.title = 'Analyst';
        vm.content = 'It\'s already under construction! see you soon!';
    };

    init();

    vm.buttonClick = function(){
        $state.go('Statement', {}, {'location': true, 'reload': true});
    };

}

export default {
    name: 'HomeCtrl',
    fn: HomeCtrl
};
