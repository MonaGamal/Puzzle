puzzleApp.controller('puzzleController', puzzleController);

puzzleController.$inject = ['$scope', '$location', '$interval', '$timeout', 'puzzleService', 'firebaseService'];
function puzzleController($scope, $location, $interval, $timeout, puzzleService, firebaseService) {

    $scope.time = {
        totalTimeInSec: 30,
        timeInSec: 0
    };
    $scope.score = {
        wordsScore: 0, // words total calculated score
        userScore: 0 // score of the solved words
    };
    $scope.word = {
        mangled: "",
        unmangled: "", //the intial selected word
        entered: "", // the word entered by the user
        lostScore: 0, //the number of times the user used backspace and delete.it will be deducted from each word score
        score: 0 // the calculated score of the word
    };
    $scope.solvedWordArr = [];

    $scope.start = start;
    $scope.end = end;
    $scope.getNextWord = getNextWord;
    $scope.onKeyDown = onKeyDown;

    firebaseService.getWords().then(function (wordsArr) {
        $scope.wordsArr = wordsArr;
        $scope.start();
    });

    function start() {
        $scope.word = puzzleService.getRandomMangledWord($scope.wordsArr);
        $interval(function () {
            $scope.time.timeInSec += 1;
        }, 1000, $scope.time.totalTimeInSec);
        $timeout($scope.end, $scope.time.totalTimeInSec * 1000);
    };

    function end() {
        $scope.score = puzzleService.calcTotalScore($scope.solvedWordArr);
        console.log($scope.solvedWordArr);
        $location.path('score');
    };

    function getNextWord() {
        $scope.solvedWordArr.push($scope.word);
        $scope.word = puzzleService.getRandomMangledWord($scope.wordsArr);
    };

    function onKeyDown($event) {
        //case delete or backspace 
        if ($event.keyCode === 8 || $event.keyCode === 46) {
            $scope.word.lostScore += 1;
        }
    };
}