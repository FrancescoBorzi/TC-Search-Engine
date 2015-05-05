(function () {

  var app = angular.module('engine');

  app.controller("ItemController", function($scope, $stateParams, $http) {

    var request = app.api + "item/template/" + $stateParams.id;

    $http.get( request )
    .success(function(data, status, header, config) {
      $scope.template = data[0];
    })
    .error(function(data, status, header, config) {
      console.log("Error in $http.get request: " + request);
    });

  });

})()
