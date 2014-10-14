'use strict';

angular.module('angularRouteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('exam8', {
        url: '/{id1:[a-z][0-9][a-z]}/exam8',
        templateUrl: function($stateParams) {
          console.log($stateParams.id1);
          return 'app/exam8/exam8.html';
        },
        controller: 'Exam8Ctrl'
      });
  });