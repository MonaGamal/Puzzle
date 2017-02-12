puzzleApp.service('firebaseService', firebaseService);

function firebaseService() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCe4QBVU5HciNPP3etntuZOKPLEij9FRLE",
        authDomain: "puzzle-fd3ba.firebaseapp.com",
        databaseURL: "https://puzzle-fd3ba.firebaseio.com",
        storageBucket: "puzzle-fd3ba.appspot.com",
        messagingSenderId: "338041421996"
    };
    firebase.initializeApp(config);

    this.words = loadWords();

    this.getWords = function() {
        return this.words;
    }

    //load words
    function loadWords() {
        var wordsObjRef = firebase.database().ref('words/');
        return wordsObjRef.once('value').then(function (snapshot) {
            return snapshot.val();
        });
    };

    //Add new user
    this.addUser = function (name) {
        if (name) {
            firebase.database().ref('users/' + name).set({ score: "0" });
        }
    };
}