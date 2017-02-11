// ROUTES
puzzleApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'components/home/homeView.html',
            controller: 'homeController'
        })
        .when('/', {
            templateUrl: 'components/puzzle/puzzleView.html',
            controller: 'puzzleController'
        })
        .otherwise({
            redirectTo: '/'
        });
});