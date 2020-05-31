var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
    //$scope.name = '';
    $scope.initials = '';
    $scope.eyeColor = '';
    $scope.age = '';
    $scope.guid = '';
    $scope.email = '';


    $scope.users = [];
    $scope.name = 'John';
    $scope.submit = function() {
        if ($scope.name) {
          $scope.users.push(this.name);
          $scope.name = '';
        }
      };

    // $scope.list = [];
    // $scope.text = 'hello';
    // $scope.submit = function() {
    //     if ($scope.text) {
    //       $scope.list.push(this.text);
    //       $scope.text = '';
    //     }
    //   };

});