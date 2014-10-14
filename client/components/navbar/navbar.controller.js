'use strict';

angular.module('angularRouteApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    
    var _location = $location.$$url;
    
    console.log(_location);
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'Current Page',
      'link': _location
    }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      console.log($location.path());
      return route === $location.path();
    };
  });