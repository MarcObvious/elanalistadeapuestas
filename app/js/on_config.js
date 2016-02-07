function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('Home', {
            url: '/',
            controller: 'HomeCtrl as home',
            templateUrl: 'home.html',
            title: 'Home'
        })
        .state('Home2', {
            url: '/home2',
            controller: 'Example2Ctrl as home2',
            templateUrl: 'home2.html',
            title: 'Home2'
        });

    $urlRouterProvider.otherwise('/');

}

export default OnConfig;
