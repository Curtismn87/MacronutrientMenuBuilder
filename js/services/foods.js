(function(){
  var foodServices = angular.module('foodServices', ["ngResource"]);
  foodServices.factory("MenuBuilder", ["$resource", function($resource){
    return $resource("http://api.nal.usda.gov/ndb/list?format=json&lt=f&sort=n&api_key=M4zdaQiev4SOfYzye5gC3xhVTanoFD4uKXt1TNe8");
  }]);
});
