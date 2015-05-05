(function () {
  var app = angular.module('engine', ['ui.router', 'ui.bootstrap']);

  app.controller("HomeController", function($scope, $http) {

    var itemPanel = angular.element(document.querySelector("#item-panel"));
    var npcPanel = angular.element(document.querySelector("#npc-panel"));
    var questPanel = angular.element(document.querySelector("#quest-panel"));

    $scope.search = function(searchstr) {

      itemPanel.addClass("hidden");
      npcPanel.addClass("hidden");
      questPanel.addClass("hidden");

      /* looking for items... */
      var request = app.api + "item/template/" + searchstr;

      $http.get( request )
      .success(function(data, status, header, config) {

        $scope.items = data;
        if ($scope.items.length > 0) { // we found items
          itemPanel.removeClass("hidden");
        }

      })
      .error(function(data, status, header, config) {
        console.log("Error in $http.get request: " + request);
      });

      /* looking for NPCs... */
      var request = app.api + "creature/template/" + searchstr;

      $http.get( request )
      .success(function(data, status, header, config) {

        $scope.npcs = data;
        if ($scope.npcs.length > 0) { // we found npcs
          npcPanel.removeClass("hidden");
        }

      })
      .error(function(data, status, header, config) {
        console.log("Error in $http.get request: " + request);
      });

      /* looking for Quests... */
      var request = app.api + "quest/template/" + searchstr;

      $http.get( request )
      .success(function(data, status, header, config) {

        $scope.quests = data;
        if ($scope.quests.length > 0) { // we found quests
          questPanel.removeClass("hidden");
        }

      })
      .error(function(data, status, header, config) {
        console.log("Error in $http.get request: " + request);
      });

    };

  });

})()
