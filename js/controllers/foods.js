(function() {
  var app = angular.module("MenuBuilder", []);

  app.controller("foodsController",["$scope", "$http", function($scope, $http){
    // var ref = new Firebase("https://macronutrientmenu.firebaseio.com");
    // $scope.data = $firebaseObject(ref);
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
        console.log("this is all the foods" + $scope.jsonfoods);
        console.log("this is food at index 1" + $scope.jsonfoods[1].nutrients);
        for (var i=0; i < $scope.jsonfoods.length; i ++){
            var protein = $scope.jsonfoods[i].nutrients[0].value;
            var fat = $scope.jsonfoods[i].nutrients[1].value;
            var carbs = $scope.jsonfoods[i].nutrients[2].value;
            if (input > protein - (protein * (5/100)) && input < protein + (protein * (5/100))){
              self.showProtein = value;
              console.log("passed" + $scope.jsonfoods[i].name + protein);
            }
            else {
              console.log("failed" + $scope.jsonfoods[i].name + protein);
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
