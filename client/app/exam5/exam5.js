'use strict';

angular.module('angularRouteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('exam5', {
        url: '/exam5/{id1:[0-9|a-z]{2,5}}/{id2:[0-9|a-z]{2,5}}',
        templateUrl: function($stateParams) {
          console.log($stateParams.id1);
          console.log($stateParams.id2);
          return 'app/exam5/exam5.html';
        },
        controller: 'Exam5Ctrl'
      });
  });