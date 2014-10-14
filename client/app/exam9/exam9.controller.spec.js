'use strict';

describe('Controller: Exam9Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularRouteApp'));

  var Exam9Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Exam9Ctrl = $controller('Exam9Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
