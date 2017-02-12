puzzleApp.controller('scoreController', scoreController);

scoreController.$inject = ['$scope','scoreService'];

function scoreController($scope, scoreService) {
    $scope.scoreService = scoreService;
    console.log($scope.scoreService);
    console.log($scope.scoreService.score);
    console.log($scope.scoreService.solvedWordsArr);
    $scope.solvedWordsArr = scoreService.solvedWordsArr;
    $scope.score = scoreService.score;
    
}