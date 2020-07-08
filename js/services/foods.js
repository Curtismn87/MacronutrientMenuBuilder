(function(){
  var foodServices = angular.module('foodServices', ["ngResource"]);
  foodServices.factory("MenuBuilder", ["$resource", function($resource){
    return $resource("https://api.nal.usda.gov/fdc/v1/foods/list?api_key=DEMO_KEY");
  }]);
});
