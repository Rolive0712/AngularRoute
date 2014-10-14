'use strict';

describe('Controller: FugaCtrl', function () {

  // load the controller's module
  beforeEach(module('angularRouteApp'));

  var FugaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FugaCtrl = $controller('FugaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
