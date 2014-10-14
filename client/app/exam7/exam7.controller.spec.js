'use strict';

describe('Controller: Exam7Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularRouteApp'));

  var Exam7Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Exam7Ctrl = $controller('Exam7Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
