// ROUTES
puzzleApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'components/home/homeView.html',
            controller: 'homeController'
        })
        .when('/puzzle', {
            templateUrl: 'components/puzzle/puzzleView.html',
            controller: 'puzzleController'
        })
        .when('/score', {
            templateUrl: 'components/score/scoreView.html',
            controller: 'scoreController'
        })
        .otherwise({
            redirectTo: '/'
        });
});