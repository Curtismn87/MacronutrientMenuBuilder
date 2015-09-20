(function() {
  var app = angular.module("MenuBuilder", []);

  app.controller("foodsController",["$scope", "$http", function($scope, $http){
    $scope.jsonfoods = {};
    $scope.addedFood = [];

    this.getFoods = function(){
      var options = $("select option:selected").val();
      var foodsURL = "http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=M4zdaQiev4SOfYzye5gC3xhVTanoFD4uKXt1TNe8&max=1500&fg="+ options +"&nutrients=205&nutrients=204&nutrients=203";
        $http.get(foodsURL)
        .success(function(response){
          $scope.jsonfoods = response.report.foods;
        });
      };
      this.add = function(index){
        var newFood = $scope.jsonfoods.splice(index, 1);
        $scope.addedFood.push(newFood);
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
