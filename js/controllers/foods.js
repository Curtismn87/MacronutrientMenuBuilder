(function() {
  var app = angular.module("MenuBuilder");
  app.controller("foodsController", function(){
    this.foods = [
      "Chicken",
      "Beef",
      "Pizza",
      "Cake"
    ];
  });
})();
