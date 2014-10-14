'use strict';

angular.module('angularRouteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('exam3', {
        url: '/exam3/{id:[0-9]{2}}',
        templateUrl: function($stateParams) {
          console.log($stateParams.id);
          return 'app/exam3/'+$stateParams.id+'/exam3.html';
        },
        controller: 'Exam3Ctrl'
      });
  });