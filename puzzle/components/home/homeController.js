puzzleApp.controller('homeController', homeController);

homeController.$inject = ['firebaseService', '$location', '$scope', 'userService'];
function homeController(firebaseService, $location, $scope, userService) {
    $scope.submit = submit;

    if (userService.username) {
        $location.path('puzzle');
    }

    function submit() {
        if ($scope.username) {
            firebaseService.addUser($scope.username);
            userService.saveUser($scope.username);
        }
        $location.path('puzzle');
    }
}
