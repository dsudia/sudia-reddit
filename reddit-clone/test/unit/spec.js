describe('test showForm', function () {

  var controller = null;
  $scope = null;

  beforeEach(module('redditClone'));


  it('initially has a status of true for hidden items', inject(function ($controller) {
    var scope = {};
    var showForm = $controller('showForm', {
      $scope: scope
    });
    scope.should.have.property('hideStatus');
    scope.hideStatus.should.equal(true);
  }));

  it('initially has a status of true for hidden items', inject(function ($controller) {
    var scope = {};
    var showForm = $controller('showForm', {
      $scope: scope
    });
    scope.should.have.property('hideAndShow');
    scope.hideAndShow.should.be.a('function');
    scope.hideAndShow();
    scope.hideStatus.should.equal(false);
  }));


});
