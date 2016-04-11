app.controller('showTea', ['$scope', 'meanTeaData', 'getCategories', function($scope, meanTeaData, getCategories) {
  $scope.teas = meanTeaData;
  $scope.search = '';
  $scope.catSearch = '';
  $scope.categories = getCategories.getEm();
  $scope.reverse = false;
  $scope.sort = 'name';
  $scope.sortPrice = function() {
    console.log('is this fucking working?');
    $scope.sort = 'price';
    if ($scope.priceSort === 'lowest') {
      $scope.reverse = false;
    } else if ($scope.priceSort === 'highest') {
      $scope.reverse = true;
    }
  };
}]);
