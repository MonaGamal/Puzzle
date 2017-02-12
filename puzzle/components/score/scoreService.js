puzzleApp.service('scoreService', scoreService);

function scoreService() {
    this.solvedWordsArr = [];
    this.score={};
}