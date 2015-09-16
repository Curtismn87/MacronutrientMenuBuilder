(function() {
  var app = angular.module("MenuBuilder", []);

  app.controller("foodsController",["$scope", "$http" , function($scope, $http){
    console.log("before getFoods is run");
    $scope.jsonfoods = {};
    this.getFoods = function(){
        console.log("button clicked");
        $http.get("http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=M4zdaQiev4SOfYzye5gC3xhVTanoFD4uKXt1TNe8&max=15&fg=13&nutrients=205&nutrients=204&nutrients=203")
        .success(function(response){
          $scope.jsonfoods = response.report.foods;
          console.log(response.report.foods);
        });
      };
      this.delete = function(index){
        $scope.jsonfoods.splice(index, 1);
      };

    var self = this;
    self.showProtein = true;
    self.toggleShowProtein = function(value){
      var input = this.protein;
      console.log($scope.jsonfoods);
      console.log(input);
      for (var i=0; i < $scope.jsonfoods.length; i ++){
        for (var x=0; x < $scope.jsonfoods.nutrients.length; x++){
          if (input > $scope.jsonfoods.nutrients[0].value - ($scope.jsonfoods.nutrients[0].value * (5/100)) && input < $scope.jsonfoods.nutrients[0].value + ($scope.jsonfoods.nutrients[0].value * (5/100)) )
          console.log(this.$scope.jsonfoods);
          self.showProtein = value;
        }
      }
    };
  }]);
})();


// this.create = function(){
//   this.foods.unshift({
//     name: this.food,
//   });
//   this.reset();
// }; // end of create function
// this.reset = function(){
//       this.food = "";
//     }; // end reset function
// this.edit = function(index){
//   var food = this.foods[index];
//   food.name = this.name;
// };

// };
//
