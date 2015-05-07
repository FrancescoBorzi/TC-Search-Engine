(function () {

  var app = angular.module('engine');

  app.controller("QuestController", function($scope, $stateParams, $http) {

    /* get quest template */
    var request = app.api + "quest/template/" + $stateParams.id;

    $http.get( request )
    .success(function(data, status, header, config) {
      $scope.template = data[0];
    })
    .error(function(data, status, header, config) {
      console.log("Error in QUEST TEMPLATE $http.get request");
    });

    /* get creature queststarter */
    request = app.api + "creature/queststarter/quest/" + $stateParams.id;

    $http.get( request )
    .success(function(data, status, header, config) {
      if (data.length > 0) {
        $scope.npcQueststartersCount = data.length;
        $scope.npcQueststarters = data;
        angular.element(document.querySelector("#tab-npc-queststarters")).removeClass("hidden");
      }
    })
    .error(function(data, status, header, config) {
      console.log("Error in CREATURE QUESTSTARTER $http.get request");
    });

    /* get creature questenders */
    request = app.api + "creature/questender/quest/" + $stateParams.id;

    $http.get( request )
    .success(function(data, status, header, config) {
      if (data.length > 0) {
        $scope.npcQuestendersCount = data.length;
        $scope.npcQuestenders = data;
        angular.element(document.querySelector("#tab-npc-questenders")).removeClass("hidden");
      }
    })
    .error(function(data, status, header, config) {
      console.log("Error in CREATURE QUESTENDER $http.get request");
    });

  });

})()
