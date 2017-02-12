puzzleApp.service('userService', userService);

userService.$inject = ['$window'];

function userService($window) {
    this.username = $window.localStorage.getItem('username');

    this.saveUser = function(username) {

        $window.localStorage.setItem('username', username);
        this.username = username;
    }

    this.clearUser = function(){
        $window.localStorage.clear('username');
        this.username = "";
    }
}