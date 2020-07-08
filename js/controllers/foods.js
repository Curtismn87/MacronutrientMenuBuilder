(function() {
  var app = angular.module("MenuBuilder", []);

  app.controller("foodsController",["$scope", "$http", function($scope, $http){
    $scope.jsonfoods = {};
    $scope.addedFood = [];
    $scope.menuNutrients = [{name: "protein", amount: 0}, {name: "fat", amount: 0}, {name: "carbs", amount: 0}];

    this.getFoods = function(){
      var options = $("select option:selected").val();
      var proxyurl = "https://cors-anywhere.herokuapp.com/";
      var foodsURL = "https://api.nal.usda.gov/fdc/v1/foods/list?api_key=DEMO_KEY";
        $http.get(proxyurl + foodsURL)
        .success(function(response){
          $scope.jsonfoods = response.report.foods;
        });
      };
      this.getFoods();
      this.add = function(index){
        var newFood = $scope.jsonfoods.splice(index, 1);
        $scope.addedFood.push(newFood);
        $scope.menuNutrients = [{name: "protein", amount: 0}, {name: "fat", amount: 0}, {name: "carbs", amount: 0}];
        for (x = 0; x < $scope.addedFood.length; x++){
          for (y = 0; y < $scope.addedFood[x].length; y++ ){
              $scope.menuNutrients[0].amount += parseFloat($scope.addedFood[x][y].nutrients[0].value);
              $scope.menuNutrients[1].amount += parseFloat($scope.addedFood[x][y].nutrients[1].value);
              $scope.menuNutrients[2].amount += parseFloat($scope.addedFood[x][y].nutrients[2].value);
          }
        }
        $scope.menuNutrients[0].amount = $scope.menuNutrients[0].amount.toFixed(2);
        $scope.menuNutrients[1].amount = $scope.menuNutrients[1].amount.toFixed(2);
        $scope.menuNutrients[2].amount = $scope.menuNutrients[2].amount.toFixed(2);
        hideRecipe();
      };
      this.remove = function(index){
        $scope.jsonfoods.splice(index, 1);
      };
      this.clearIngredients = function(){
        $scope.addedFood.length = 0;
        $scope.menuNutrients = [{name: "protein", amount: 0}, {name: "fat", amount: 0}, {name: "carbs", amount: 0}];
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
            if (proteinInput === null || proteinInput === undefined){
              return;
            }
            else if (proteinInput >= protein - (protein * (5/100)) && proteinInput <= protein + (protein * (5/100))){
              $("#"+i).show();
            }
            else {
              $("#"+i).hide();
            }

          this.protein="";
        }

      };
      function hideRecipe(){
        if ($scope.menuNutrients[0].amount !== 0 && $scope.menuNutrients[1].amount !== 0 && $scope.menuNutrients[2].amount !== 0){
          $(".currentRecipe").show();
        }
        else $(".currentRecipe").hide();
      }
      hideRecipe();
  }]);
})();
