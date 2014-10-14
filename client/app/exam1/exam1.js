'use strict';

angular.module('angularRouteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('exam1', {
        url: '/exam1',
        templateUrl: 'app/exam1/exam1.html',
        controller: 'Exam1Ctrl'
      });
  });