'use strict';

angular.module('angularRouteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('exam6', {
        url: '/{id1:[0-9|a-z]{2,5}}/{id2:[0-9|a-z]{2,5}}/exam6',
        templateUrl: function($stateParams) {
          console.log($stateParams.id1);
          console.log($stateParams.id2);
          return 'app/exam6/exam6.html';
        },
        controller: 'Exam6Ctrl'
      });
  });