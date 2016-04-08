app.controller('showTea', ['$scope', 'meanTeaData', 'getCategories', function($scope, meanTeaData, getCategories) {
  $scope.teas = meanTeaData;
  $scope.categories = getCategories.getEm();
  $scope.reverse = false;
  $scope.sort = 'name';
  $scope.$watch('priceSort', function(newVal, oldVal){
    switch(newVal){
      case 'lowest':
        console.log('fired sortPriceLow');
        $scope.sort = 'price';
        $scope.reverse = false;
        break;
      case 'highest':
        console.log('fired sortPriceHigh');
        $scope.sort = 'price';
        $scope.reverse = true;
        break;
      default:
        $scope.sort = 'name';
        $scope.reverse = false;
        break;
    }
  });
}]);
