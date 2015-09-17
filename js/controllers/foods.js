(function() {
  var app = angular.module("MenuBuilder", []);

  app.controller("foodsController",["$scope", "$http", function($scope, $http){
    // var ref = new Firebase("https://macronutrientmenu.firebaseio.com");
    // $scope.data = $firebaseObject(ref);
    console.log("before getFoods is run");
    $scope.jsonfoods = {};
    this.getFoods = function(){
      var options = $("select option:selected").val();
      console.log(options);
      var foodsURL = "http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=M4zdaQiev4SOfYzye5gC3xhVTanoFD4uKXt1TNe8&max=1500&fg="+ options +"&nutrients=205&nutrients=204&nutrients=203";
      console.log(foodsURL);
        console.log("button clicked");
        $http.get(foodsURL)
        .success(function(response){
          $scope.jsonfoods = response.report.foods;
        });
      };
      this.delete = function(index){
        $scope.jsonfoods.splice(index, 1);
      };

      var self = this;
      self.toggleShowProtein = function(value){
        var input = this.protein;
        for (var i=0; i < $scope.jsonfoods.length; i ++){
            var protein = parseFloat($scope.jsonfoods[i].nutrients[0].value);
            var fat = $scope.jsonfoods[i].nutrients[1].value;
            var carbs = $scope.jsonfoods[i].nutrients[2].value;
            if (input >= protein - (protein * (5/100)) && input <= protein + (protein * (5/100))){
              $("#"+i).show();
            }
            else {
              $("#"+i).hide();
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
