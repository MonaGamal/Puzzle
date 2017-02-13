puzzleApp.controller('puzzleController', puzzleController);

puzzleController.$inject = ['$scope', '$location', '$interval', '$timeout', 'puzzleService', 'firebaseService', 'scoreService', 'userService'];
function puzzleController($scope, $location, $interval, $timeout, puzzleService, firebaseService, scoreService, userService) {

    $scope.time = {
        totalTimeInSec: 40,
        timeInSec: 0
    };
    $scope.score = {
        wordsScore: 0, // words total calculated score
        userScore: 0 // score of the solved words
    };
    $scope.word = {}
    $scope.word.mangled = "";
    $scope.word.unmangled = ""; //the intial selected word
    $scope.word.entered = ""; // the word entered by the user
    $scope.wordEntered = '';
    $scope.word.lostScore = 0; //the number of times the user used backspace and delete.it will be deducted from each word score
    $scope.word.score = 0 // the calculated score of the word
 
    $scope.solvedWordsArr = [];

    $scope.start = start;
    $scope.end = end;
    $scope.getNextWord = getNextWord;
    $scope.onKeyDown = onKeyDown;
    $scope.username = userService.username;

    if (!userService.username) {
        $location.path('home');
    }

    firebaseService.getWords().then(function (wordsArr) {
        $scope.wordsArr = wordsArr;
        $scope.start();
    });

    function start() {
        var word = puzzleService.getRandomMangledWord($scope.wordsArr);
        angular.copy(word, $scope.word);
        
        $interval(function () {
            $scope.time.timeInSec += 1;
        }, 1000, $scope.time.totalTimeInSec);
        $timeout($scope.end, $scope.time.totalTimeInSec * 1000);
    };

    function end() {
        $scope.score = puzzleService.calcTotalScore($scope.solvedWordsArr);
        firebaseService.addUser(userService.username, $scope.score.userScore);
        scoreService.solvedWordsArr = $scope.solvedWordsArr;
        scoreService.score = $scope.score;
        $location.path('score');
    };

    function getNextWord() {
        $scope.solvedWordsArr.push(angular.copy($scope.word));
        var word = puzzleService.getRandomMangledWord($scope.wordsArr);
        angular.copy(word, $scope.word);
    };

    function onKeyDown($event) {
        //case delete or backspace 
        if ($event.keyCode === 8 || $event.keyCode === 46) {
            $scope.word.lostScore += 1;
        }
    };
}