(function() {
  var app = angular.module("MenuBuilder", []);

  app.controller("foodsController",["$scope", "$http" , function($scope, $http){
    console.log("before getFoods is run");
    this.getFoods = function(){
        console.log("button clicked");
        $http.get("http://api.nal.usda.gov/ndb/list?format=json&lt=f&sort=n&api_key=DEMO_KEY")
        .success(function(response){
          $scope.food = response;
          console.log(response);
        });
        // .fail(function(){
        //   console.log("call has failed");
        // });
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
// this.delete = function(index){
//   this.foods.splice(index, 1);
// };
//
