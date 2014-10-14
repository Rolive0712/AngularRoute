'use strict';

describe('Controller: HogeCtrl', function () {

  // load the controller's module
  beforeEach(module('angularRouteApp'));

  var HogeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HogeCtrl = $controller('HogeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
