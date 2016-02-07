function HomeCtrl($log, $modal) {
    'ngInject';

    // ViewModel
    const vm = this;

    vm.title = 'MarcObvious Portfolio';
    vm.content = 'It\'s already under construction! see you soon!';
    $log.debug(vm);


    vm.buttonClick = function () {
        $log.debug("Click!");
        $modal.open({
            templateUrl: 'modals/generic.modal.html',
            size: 'sm',
            resolve: {
                data: function () {
                    return {status: 'hola', title:'hola', message:'holaaaaaaa'};
                }
            },
            controller:  ['$rootScope', '$scope', '$modalInstance', 'data', '$timeout',
                function ($rootScope, $scope, $modalInstance, data, $timeout) {
                    var init = function () {
                        $timeout(function () {
                            $rootScope.domReady = true;
                        });
                        $scope.data = data;
                    };

                    init();

                    $scope.ok = function () {
                        $modalInstance.close();
                    };

                    $scope.cancel = function () {
                        $modalInstance.dismiss('Exit');
                    };
                }]
        });
    };
}

export default {
    name: 'HomeCtrl',
    fn: HomeCtrl
};
