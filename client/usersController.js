angular.module('Users', []).controller('UsersList', function ($scope) {
    $scope.users = [
        { name: 'Ivana Ivic', initials: 'II', id: '1', eyeColor: 'blue', age: 27, guid: '459085d1-bb17-4e8e-a671', email: 'ivanai@gmail.com' },
        { name: "Marko Maric", initials: "MM", id: "2", eyeColor: "blue", age: 28, guid: "a6f3177f-dfed-4129-86d0-1752f0248876", email: "markom@gmail.com" },
        { name: "Lovro Lovric", initials: "LL", id: "3", eyeColor: "green", age: 30, guid: "eecf8d71-0d2b-4579-a0fd-ac005525473a", email: "lovrol@gmail.com" },
        { name: "Matej Matejic", initials: "MM", id: "4", eyeColor: "brown", age: 31, guid: "76ddeaed-3c3c-4eda-8fdd-deed23e14e2e", email: "matejm@gmail.com" }
    ]
})





