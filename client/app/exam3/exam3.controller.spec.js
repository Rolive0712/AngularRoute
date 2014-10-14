'use strict';

describe('Controller: Exam3Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularRouteApp'));

  var Exam3Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Exam3Ctrl = $controller('Exam3Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
