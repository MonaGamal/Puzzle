puzzleApp.controller('homeCtrl', ['$scope', 'firebaseService', function($scope, firebaseService) {
    $scope.submit = function() {
            if ($scope.name) {
                firebaseService.addUser($scope.name);
            }
         };
}]);