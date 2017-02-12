puzzleApp.controller('scoreController', scoreController);

scoreController.$inject = ['$scope', 'scoreService', '$location'];

function scoreController($scope, scoreService, $location) {

    $scope.solvedWordsArr = scoreService.solvedWordsArr;
    $scope.score = scoreService.score;

    $scope.play = play;

    if (scoreService.score && !scoreService.score.hasOwnProperty('userScore')) {
        $location.path('puzzle');
    }

    function play() {
        $location.path('puzzle');
    }
}