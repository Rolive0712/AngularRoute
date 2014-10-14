'use strict';

describe('Controller: Exam6Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularRouteApp'));

  var Exam6Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Exam6Ctrl = $controller('Exam6Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
