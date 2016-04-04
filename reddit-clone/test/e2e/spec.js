describe('Posts display correctly', function () {

  var sortButton = element(by.css('#sort-menu'));

  beforeEach(function() {
    browser.get('http://localhost:3000/');
  });

  it('should show all posts', function () {
    var postSection = element.all(by.css('.post-div'));
    expect(postSection.count()).toEqual(3);
    expect(postSection.get(0).getText()).toContain('Yosemite');
    expect(postSection.get(1).getText()).toContain('Aspens');
    expect(postSection.get(2).getText()).toContain('Yellowstone');
  });

  it('clicking the sort by date button sorts by date', function () {
    sortButton.click();
    var sortByDateButton = element(by.id('sort-date'));
    sortByDateButton.click();
    var postSection = element.all(by.css('.post-div'));
    expect(postSection.get(0).getText()).toContain('Aspens');
    expect(postSection.get(1).getText()).toContain('Yosemite');
    expect(postSection.get(2).getText()).toContain('Yellowstone');
  });

  it('clicking the sort by title button sorts by title', function () {
    sortButton.click();
    var sortByTitleButton = element(by.id('sort-title'));
    sortByTitleButton.click();
    var postSection = element.all(by.css('.post-div'));
    expect(postSection.get(0).getText()).toContain('Aspens');
    expect(postSection.get(1).getText()).toContain('Yellowstone');
    expect(postSection.get(2).getText()).toContain('Yosemite');
  });

});
//
// describe('TestTwoController', function () {
//
//   var total = element(by.tagName('p'));
//   var numberInputBox = element(by.css('[ng-model="newItem"]'));
//   var changeTotalButton = element(by.css('.btn-default'));
//
//   beforeEach(function() {
//     browser.get('http://localhost:8888/#/two');
//   });
//
//   it('initially has a total', function () {
//     expect(total.getText()).toEqual('6');
//   });
//
//   it('updates the `total` when a value is added', function () {
//     numberInputBox.sendKeys(7);
//     changeTotalButton.click();
//     numberInputBox.clear();
//     expect(total.getText()).toEqual('13');
//     numberInputBox.sendKeys(7);
//     changeTotalButton.click();
//     expect(total.getText()).toEqual('20');
//     numberInputBox.clear();
//     numberInputBox.sendKeys(-700);
//     changeTotalButton.click();
//     expect(total.getText()).toEqual('-680');
//   });
//
//   it('does not update the `total` when an empty value is added', function () {
//     numberInputBox.sendKeys('');
//     changeTotalButton.click();
//     expect(total.getText()).toEqual('6');
//     numberInputBox.sendKeys('hi!');
//     changeTotalButton.click();
//     expect(total.getText()).toEqual('6');
//   });
//
// });
//
// describe('TestThreeController', function () {
//
//   var modalNumber = element.all(by.tagName('span')).get(1);
//   var modalButton = element(by.tagName('button'));
//   var iterateButton = element(by.css('[ng-click="changeModalText()"]'));
//   var hideButton = element(by.css('[ng-click="$hide()"]'));
//   var justSomeText = element(by.tagName('h2'));
//
//   beforeEach(function() {
//     browser.get('http://localhost:8888/#/three');
//   });
//
//   it('initially has a modalNumber', function () {
//     modalButton.click();
//     expect(modalNumber.getText()).toEqual('1');
//   });
//
//   it('updates the `modalNumber` when a value is added', function () {
//     modalButton.click();
//     iterateButton.click();
//     expect(modalNumber.getText()).toEqual('2');
//     iterateButton.click().click().click();
//     expect(modalNumber.getText()).toEqual('5');
//     hideButton.click();
//     expect(justSomeText.getText()).toEqual('Just a modal');
//   });
// });
//
//   describe('TestFourController', function () {
//
//     var loadButton = element(by.tagName('button'));
//     var ul = element.all(by.tagName('ul'));
//     var li = element.all(by.tagName('li'));
//
//     beforeEach(function() {
//       browser.get('http://localhost:8888/#/four');
//     });
//
//     it('updates the DOM when the button is clicked', function () {
//       expect(ul.count()).toEqual(1);
//       expect(li.count()).toEqual(5);
//       loadButton.click();
//       expect(ul.count()).toEqual(101);
//       expect(li.count()).toEqual(105);
//     });
//
//   });
