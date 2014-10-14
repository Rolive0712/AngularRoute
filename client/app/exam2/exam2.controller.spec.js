'use strict';

describe('Controller: Exam2Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularRouteApp'));

  var Exam2Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Exam2Ctrl = $controller('Exam2Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
