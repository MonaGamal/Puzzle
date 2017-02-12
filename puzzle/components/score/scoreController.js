puzzleApp.controller('scoreController', scoreController);

scoreController.$inject = ['$scope'];

function scoreController($scope) {
    $scope.volume = 75;
}