'use strict';

describe('Controller: Exam4Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularRouteApp'));

  var Exam4Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Exam4Ctrl = $controller('Exam4Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
