(function() {
  var app = angular.module("MenuBuilder");
  app.controller("foodsController", function(){
    this.foods = [
      {name: "Chicken"}, {name: "Beef"}, {name: "Pizza"}, {name: "Cake"}
    ];
    this.create = function(){
      this.foods.unshift({
        name: this.food,
      });
      this.reset();
    }; // end of create function
    this.reset = function(){
          this.food = "";
        }; // end reset function
    this.edit = function(index){
      var food = this.foods[index];
      food.name = this.name;
    };
    this.delete = function(index){
      this.foods.splice(index, 1);
    }


  }); // end of controller
})();
