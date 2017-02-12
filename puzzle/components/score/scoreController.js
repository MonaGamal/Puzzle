puzzleApp.controller('scoreController', scoreController);

scoreController.$inject = ['$scope', 'scoreService', '$location', '$interval', 'userService'];

function scoreController($scope, scoreService, $location, $interval, userService) {

    $scope.solvedWordsArr = scoreService.solvedWordsArr;
    $scope.score = scoreService.score;
    $scope.scoreInSec = 0;
    $scope.username = userService.username;
    $scope.logOut = logOut;

    $scope.play = play;

    if (scoreService.score && !scoreService.score.hasOwnProperty('userScore')) {
        $location.path('puzzle');
    }
    else
    {
        if($scope.score.userScore)
        {
            $interval(function () {
                $scope.scoreInSec += 1;
            }, 100,  $scope.score.userScore);
        }
    }
     
    function play() {
        $location.path('puzzle');
    }

    function logOut(){
        userService.clearUser();
        $location.path('home')

    }
}