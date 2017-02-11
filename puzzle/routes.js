// ROUTES
puzzleApp.config(function ($routeProvider) {
    $routeProvider
     .when('/', {
        templateUrl: 'components/home/home.html',
        controller: 'homeCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});