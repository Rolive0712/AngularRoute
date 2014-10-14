'use strict';

describe('Controller: Exam8Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularRouteApp'));

  var Exam8Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Exam8Ctrl = $controller('Exam8Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
