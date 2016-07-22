/* setup your angular app here */
var app = angular.module('FruitVeggie', [])

app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.fridge = fruits.concat(vegetables)
  $scope.fruit = []
  $scope.vegetables = []

  $scope.leftHidden = {}
  $scope.fridgeHidden = {}
  $scope.rightHidden = {}

  $scope.fridge.forEach(function(i) {
    $scope.leftHidden[i] = true;
    $scope.fridgeHidden[i] = false;
    $scope.rightHidden[i] = true;
  })

  $scope.left = function() {
    if(!$scope.rightHidden[this.food]) {
      $scope.leftHidden[this.food] = true
      $scope.fridgeHidden[this.food] = false
      $scope.rightHidden[this.food] = true
    } else if (!$scope.fridgeHidden[this.food]) {
      $scope.leftHidden[this.food] = false
      $scope.fridgeHidden[this.food] = true
      $scope.rightHidden[this.food] = true
    }

    // if (fruits.indexOf(this.food)) {

    // }
  }
  $scope.right = function() {
    if(!$scope.leftHidden[this.food]) {
      $scope.leftHidden[this.food] = true
      $scope.fridgeHidden[this.food] = false
      $scope.rightHidden[this.food] = true
    } else if (!$scope.fridgeHidden[this.food]) {
      $scope.leftHidden[this.food] = true
      $scope.fridgeHidden[this.food] = true
      $scope.rightHidden[this.food] = false
    }
  }
}])

// app.directive('foodItem', function() {
//   return {
//     restrict: 'AE',
//     replace: true,
//     templateUrl: 'templates/item.html'
//   }
// })

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
