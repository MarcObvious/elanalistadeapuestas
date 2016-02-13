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
        .state('Statement', {
            url: '/statement',
            controller: 'StatementCtrl as statement',
            templateUrl: 'statement.html',
            title: 'Statement'
        })
        .state('Howto', {
            url: '/howto',
            controller: 'HowtoCtrl as howto',
            templateUrl: 'howto.html',
            title: 'Howto'
        })
        .state('Grid', {
            url: '/grid',
            controller: 'GridCtrl as grid',
            templateUrl: 'grid.html',
            title: 'Grid'
        })
        .state('Statistics', {
            url: '/statistics',
            controller: 'StatisticsCtrl as statistics',
            templateUrl: 'statistics.html',
            title: 'Statistics'
        });

    $urlRouterProvider.otherwise('/');
}

export default OnConfig;
