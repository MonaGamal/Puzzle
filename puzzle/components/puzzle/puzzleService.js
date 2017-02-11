puzzleApp.service('puzzleService', puzzleService);

puzzleService.$inject = ['firebaseService'];

function puzzleService(firebaseService) {

    this.getRandomMangledWord = function (wordsArr) {
        wordObj = getMangledWord(wordsArr);
        wordObj.score = calcWordMaxScore(wordObj.mangled);
        wordObj.entered = "";
        wordObj.lostScore = 0;
        return wordObj;
    };

    this.calcTotalScore = function (solvedWordArr) {
        return solvedWordArr.map(calcWordScore).reduce(combineScore, {
            userScore: 0,
            wordScore: 0
        });
    }

    function getMangledWord(wordsArr) {
        //1. get random index from the words array
        var index = Math.floor(Math.random() * (wordsArr.length - 1));
        //2. locate the word at the generated index
        var unmangledWord = wordsArr[index];
        //3. shuffle chars
        var mangledWord = shuffleWord(unmangledWord);
        return { mangled: mangledWord, unmangled: unmangledWord };
    };

    function shuffleWord(word) {
        if (word === null) {
            return '';
        }

        word += '';
        var newWord = '';
        var rand;
        var i = word.length;

        while (i) {
            rand = Math.floor(Math.random() * i);
            newWord += word.charAt(rand);
            word = word.substring(0, rand) + word.substr(rand + 1);
            i--;
        }
        return newWord;
    }

    function calcWordMaxScore(word) {
        return Math.floor(1.95 ^ (word.length / 3));
    };

    function calcWordScore(word) {
        if (word.unmangled === word.entered && word.lostScore < word.score) {
            scoresObj = {
                userScore: word.score - word.lostScore,
                wordScore: word.score
            };
        }
        else {
            scoresObj = {
                userScore: 0,
                wordScore: word.score
            };
        }
        console.log(scoresObj);
        return scoresObj;
    };

    function combineScore(word1, word2) {
        console.log({
            userScore: word1.userScore + word2.userScore,
            wordScore: word1.wordScore + word2.wordScore
        });
        return {
            userScore: word1.userScore + word2.userScore,
            wordScore: word1.wordScore + word2.wordScore
        };
    };
}