describe('TestOneController', function () {

  var controller = null;
  $scope = null;

  beforeEach(function () {
    module('redditClone');
  });

  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    controller = $controller('showForm', {
      $scope: $scope
    });
  }));

  it('initially has a status of true for hidden items', function () {
    assert.equal($scope.hideStatus, true);
  });

  xit('clicking the button changes the status of hidden items', function () {
    $scope.newText = "Hi!";
    $scope.changeGreeting();
    assert.equal($scope.greeting, "Hi!");
  });


});
