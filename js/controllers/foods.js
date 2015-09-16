(function() {
  var app = angular.module("MenuBuilder", []);

  app.controller("foodsController",["$scope", "$http" , function($scope, $http){
    console.log("before getFoods is run");
    this.getFoods = function(){
        console.log("button clicked");
        $http.get("http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=M4zdaQiev4SOfYzye5gC3xhVTanoFD4uKXt1TNe8&nutrients=205&nutrients=204&nutrients=203")
        .success(function(response){
          $scope.jsonfoods = response.report.foods;

          console.log(response.report.foods);
          console.log(response.report.foods[0].nutrients[0].nutrient);
          console.log(response.report.foods[0].nutrients[0].value);
        });
      };
      this.delete = function(index){
        jsonfoods.delete(index, 1);
      };
  }]);
})();



// app.controller("foodsController", function(){
//   console.log("before getFoods is run");
//     this.getFoods = function (){
//       console.log("button clicked");
//       $http.get("http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=M4zdaQiev4SOfYzye5gC3xhVTanoFD4uKXt1TNe8&nutrients=205&nutrients=204&nutrients=208&nutrients=269")
//       .success(function(response){
//         console.log(response);
//       })
//       .fail(function(){
//         console.log("call has failed");
//       });
//     };
// }); // end of controller

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
