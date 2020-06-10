angular.module('Index', [])
    .controller('IndexList', ['$scope', '$rootScope', function ($scope, $rootScope) {


        $rootScope.iphone2 = 'http://localhost:5000/iphone'
        $rootScope.kitchen2 = 'http://localhost:5000/kitchen'
        $rootScope.users2 = 'http://localhost:5000/users'
        $rootScope.test2 = 'http://localhost:5000/test'

        $rootScope.myStyle = {
            "padding": "50px",
            "color": "white",
            "background-color": "cornflowerblue",
            "font-size": "60px",
            "padding": "50px"
        }


        $rootScope.myBody = {
            "padding-left": "50px",
            "padding-right": "50px"
       }

    }])
    .controller('NamesController', ['$scope', function ($scope) {
        // $scope.names = ['Iphone', 'Kitchen', 'Users']
        $scope.iphone = ['Iphone']
        $scope.kitchen = ['Kitchen']
        $scope.users = ['Users']
        $scope.test = ['Test']
    }])