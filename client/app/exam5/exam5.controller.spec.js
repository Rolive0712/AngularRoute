'use strict';

describe('Controller: Exam5Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularRouteApp'));

  var Exam5Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Exam5Ctrl = $controller('Exam5Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
