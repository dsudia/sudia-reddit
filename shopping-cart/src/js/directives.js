app.directive('teaInfo', ['meanTeaData', function(meanTeaData) {
  return {
    restrict: 'E',
    templateUrl: 'partials/teaInfo.html',
    controller: function($scope) {
      $scope.teas = meanTeaData;
    },
  };
}]);

app.directive('indivTea', ['meanTeaData', 'shoppingCart', function(meanTeaData, shoppingCart) {
  return {
    scope: { tea: '=' },
    templateUrl: 'partials/indivTea.html',
    controller: function($scope) {
      $scope.addItem = shoppingCart.addToBag;
    }
  };
}]);

app.directive('teaImg', function() {
  return {
    scope: { tea: '=' },
    templateUrl: 'partials/indivImg.html'
  };
});

app.directive('navDir', function() {
  return {
    templateUrl: 'partials/nav.html'
  };
});

app.directive('searchDir', ['getCategories', 'shoppingCart', function(getCategories, shoppingCart) {
  return {
    templateUrl: 'partials/search.html',
    controller: function($scope) {
      $scope.categories = getCategories.getEm();
      $scope.bagQuant = shoppingCart.bag.length;
    }
  };
}]);