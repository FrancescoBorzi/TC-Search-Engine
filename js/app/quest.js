(function () {

  var app = angular.module('engine');

  app.controller("QuestController", function($scope, $stateParams, $http) {

    var request = app.api + "quest/template/" + $stateParams.id;

    $http.get( request )
    .success(function(data, status, header, config) {
      $scope.template = data[0];
    })
    .error(function(data, status, header, config) {
      console.log("Error in $http.get request: " + request);
    });

  });

})()
