'use strict';

angular.module('angularRouteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('exam9', {
        url: '/{id1:[0-9|a-z]{2,5}}{id2:[/|0-9|a-z]{0,5}}/exam9',
        templateUrl: function($stateParams) {
          console.log($stateParams.id1);
          if ($stateParams.id2==='') {
            return $stateParams.id1 + '/exam9.html'
          } else {
            return $stateParams.id1 + $stateParams.id2 + '/exam9.html'
          }
          // return 'app/exam9/exam9.html';
        },
        controller: 'Exam9Ctrl'
      });
  });