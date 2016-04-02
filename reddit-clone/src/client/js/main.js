var app = angular.module('redditClone', []);
app.controller('showForm', function($scope) {
  $scope.hideStatus = true;
  $scope.hideAndShow = function() {
    $scope.hideStatus = !$scope.hideStatus;
  };
});
