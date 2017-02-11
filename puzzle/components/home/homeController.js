puzzleApp.controller('homeController', homeController);

homeController.$inject = ['firebaseService', '$location', '$scope'];
function homeController(firebaseService, $location, $scope) {
    $scope.submit = submit;

    function submit() {
        if ($scope.name) {
            firebaseService.addUser($scope.name);
        }
        $location.path('puzzle');
    }
}
