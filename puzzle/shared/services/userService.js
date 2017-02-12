puzzleApp.service('userService', userService);

userService.$inject = ['$window'];

function userService($window) {
    this.username = function() {
        return $window.localStorage.username;
    };
}