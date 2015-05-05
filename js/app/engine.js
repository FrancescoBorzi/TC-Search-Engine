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

      itemPanel.removeClass("hidden");
      npcPanel.removeClass("hidden");
      questPanel.removeClass("hidden");

      // TODO
    };

  });

})()
