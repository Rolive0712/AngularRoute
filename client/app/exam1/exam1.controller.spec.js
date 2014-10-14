'use strict';

describe('Controller: Exam1Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularRouteApp'));

  var Exam1Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Exam1Ctrl = $controller('Exam1Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
