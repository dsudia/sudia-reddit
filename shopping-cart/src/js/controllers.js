app.controller('showTea', ['$scope', 'meanTeaData', function($scope, meanTeaData) {
  $scope.teas = meanTeaData;
  $scope.search = '';
}]);
