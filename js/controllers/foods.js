(function() {
  var app = angular.module("MenuBuilder", []);

  app.controller("foodsController",["$scope", "$http", function($scope, $http){
    // var ref = new Firebase("https://macronutrientmenu.firebaseio.com");
    // $scope.data = $firebaseObject(ref);
    $scope.jsonfoods = {};
    $scope.addedFood = [];

    this.getFoods = function(){
      console.log("button Clicked");
      var options = $("select option:selected").val();
      var foodsURL = "http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=M4zdaQiev4SOfYzye5gC3xhVTanoFD4uKXt1TNe8&max=1500&fg="+ options +"&nutrients=205&nutrients=204&nutrients=203";
        $http.get(foodsURL)
        .success(function(response){
          $scope.jsonfoods = response.report.foods;
          console.log($scope.jsonfoods);
        });
      };
      this.add = function(index){
        var newFood = $scope.jsonfoods.splice(index, 1);
        var menuNutrients = {protein: 0, fat: 0, carbs: 0};
        $scope.addedFood.push(newFood);
        console.log($scope.addedFood);
        // console.log($scope.addedFood[0][0].length);
        // console.log($scope.addedFood[0][0].nutrients);
        // console.log($scope.addedFood[0][0].nutrients[0].nutrient);
        // console.log($scope.addedFood[0][0].nutrients[0].value);
        for (x = 0; x < $scope.addedFood.length; x++){
          for (y = 0; y < $scope.addedFood[x].length; y++ ){
              menuNutrients.protein += parseFloat($scope.addedFood[x][y].nutrients[0].value);
              menuNutrients.fat += parseFloat($scope.addedFood[x][y].nutrients[1].value);
              menuNutrients.carbs += parseFloat($scope.addedFood[x][y].nutrients[2].value);
          }
        }
        menuNutrients.protein.toFixed(2);
        menuNutrients.fat.toFixed(2);
        menuNutrients.carbs.toFixed(2);
        console.log(menuNutrients)
      };
      var self = this;
      self.toggleShowProtein = function(value){
        var proteinInput = this.protein;
        var fatInput = this.fat;
        var carbInput = this.carbohydrate;
        for (var i=0; i < $scope.jsonfoods.length; i ++){
            var protein = parseFloat($scope.jsonfoods[i].nutrients[0].value);
            var fat = parseFloat($scope.jsonfoods[i].nutrients[1].value);
            var carbs = parseFloat($scope.jsonfoods[i].nutrients[2].value);
            if (proteinInput >= protein - (protein * (5/100)) && proteinInput <= protein + (protein * (5/100))){
              $("#"+i).show();
            }
            else {
              $("#"+i).hide();
            }

          this.protein="";
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
