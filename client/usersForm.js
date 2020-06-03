var app = angular.module('myApp', []);
app.controller('formCtrl', function ($scope, $http) {
  $scope.initials = '';
  $scope.eyeColor = '';
  $scope.age = '';
  $scope.guid = '';
  $scope.email = '';


  $scope.users = [];
  $scope.name = '';
  $scope.initials = '';
  $scope.eyeColor = '';
  $scope.age = '';
  $scope.guid = '';
  $scope.email = '';
  $scope.submit = function () {
    if ($scope.name) {
      $scope.users.push(this.name);
      $scope.users.push(this.initials);
      $scope.users.push(this.eyeColor);
      $scope.users.push(this.age);
      $scope.users.push(this.guid);
      $scope.users.push(this.email);

      var data = {
        name: this.name,
        initials: this.initials,
        eyeColor: this.eyeColor,
        age: this.age,
        guid: this.guid,
        email: this.email
      }


      $scope.name = '';
      $scope.initials = '';
      $scope.eyeColor = '';
      $scope.age = '';
      $scope.guid = '';
      $scope.email = '';



      console.log(JSON.stringify(data))

      // $http.get('/users/new/post', $scope.formData)

      $scope.formData = {};
      $scope.todoData = data;
      console.log(data);


      // Simple GET request example:
      $http({
        method: 'GET',
        url: 'http://localhost:3000/usersView'
      }).then(function successCallback(response) {
        console.log("It's ok")
        //   $scope.Data = JSON.stringify(data);
        //   console.log(data);
        //   console.log($scope.Data);

        //   // this callback will be called asynchronously
        //   // when the response is available
      }, function errorCallback(response) {
        console.log("It's not ok")
        //   // called asynchronously if an error occurs
        //   // or server returns response with an error status.
      });

      // var config = {
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
      //   }
      // }

      // $http.post('http://localhost:3000/users/new/post', data, config)
      //   .success(function (data, status, headers, config) {
      //     $scope.PostDataResponse = data;
      //   })
      //   .error(function (data, status, header, config) {
      //     $scope.ResponseDetails = "Data: " + data +
      //       "<hr />status: " + status +
      //       "<hr />headers: " + header +
      //       "<hr />config: " + config;
      //   });

      // Simple GET request example:S
      $http({
        method: 'POST',
        url: 'http://localhost:3000/users/new/post',
        headers: {
          'Content-Type': 'application/json'
        },
        data
      }).then(function successCallback(response) {
        console.log("It's ok")
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        console.log("It's not ok")
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });




    }
  };




  $scope.myStyle = {
    "margin-left": "30px"
  };
  $scope.myStyle2 = {
    "margin-left": "25px"
  };

  $scope.myStyle3 = {
    "margin-left": "45px"
  };

  $scope.myStyle4 = {
    "margin-left": "10px"
  };

  $scope.myStyle5 = {
    "margin-left": "40px"
  };

  $scope.Submit = {
    "margin-left": "80px"
  };

});