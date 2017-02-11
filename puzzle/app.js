var puzzleApp = angular.module('puzzleApp', ['ngRoute', 'ngResource']);

(function(){
        // Initialize Firebase
     var config = {
        apiKey: "AIzaSyCe4QBVU5HciNPP3etntuZOKPLEij9FRLE",
        authDomain: "puzzle-fd3ba.firebaseapp.com",
        databaseURL: "https://puzzle-fd3ba.firebaseio.com",
        storageBucket: "puzzle-fd3ba.appspot.com",
        messagingSenderId: "338041421996"
    };
    firebase.initializeApp(config);
    
    //load words    
    
    var wordsObjRef = firebase.database().ref('words/');
    return wordsObjRef.once('value').then(function(snapshot) {
        console.log(snapshot.val())
        return snapshot.val();
    });

    //Add new user

    if (name) {
        firebase.database().ref('users/'+ name).set({score: "0"});
    }
})();