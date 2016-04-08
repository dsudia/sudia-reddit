app.controller('showTea', ['$scope', 'meanTeaData', 'getCategories', function($scope, meanTeaData, getCategories) {
  $scope.teas = meanTeaData;
  $scope.search = '';
  $scope.catSearch = '';
  $scope.categories = getCategories.getEm();
  console.log($scope.search);
  console.log($scope.catSearch);
}]);
