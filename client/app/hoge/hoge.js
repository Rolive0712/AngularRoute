'use strict';

angular.module('angularRouteApp')
  .config(function ($stateProvider) {
    var _id1, _id2;
    $stateProvider
      .state('hoge', {
        url: '/{id1:[0-9|a-z]{2,5}}{id2:[/|0-9|a-z]{0,5}}/hoge',
        templateUrl: function($stateParams) {

          _id1 = $stateParams.id1;
          _id2 = $stateParams.id2;

          return 'app/' + $stateParams.id1 + $stateParams.id2 + '/hoge.html'
          // return 'app/exam9/hoge.html';
        },
        controller: function($scope){
          $scope.id1 = _id1;
          $scope.id2 = _id2;
          return 'HogeCtrl'
        }
      });
  });