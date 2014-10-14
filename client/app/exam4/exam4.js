'use strict';

angular.module('angularRouteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('exam4', {
        url: '/exam4/{id:[0-9|a-z]{2,3}}',
        templateUrl: function($stateParams) {
          console.log($stateParams.id);
          return 'app/exam4/exam4.html';
        },
        controller: 'Exam4Ctrl'
      });
  });