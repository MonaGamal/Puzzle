puzzleApp.controller('homeController', homeController);

homeController.$inject = ['firebaseService', '$location', '$scope','userService'];
function homeController(firebaseService, $location, $scope, userService) {
    $scope.submit = submit;

    function submit() {
        if ($scope.username) {
            firebaseService.addUser($scope.username);
            userService.username = $scope.username;
        }
        $location.path('puzzle');
    }
}
