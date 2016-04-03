describe('test showForm controller', function () {
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

  it('changes value of hideStatus on button click', inject(function ($controller) {
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

describe('test addPost', function() {

});

describe('test showComment', function() {

});

describe('test addComment', function() {

});

describe('test change post score', function() {

});

describe('test displayPosts', function() {

});
