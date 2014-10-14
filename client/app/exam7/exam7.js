'use strict';

angular.module('angularRouteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('exam7', {
        url: '/{id1:[0-9|a-z]{2,5}}{id2:[/|0-9|a-z]{0,5}}/exam7',
        templateUrl: function($stateParams) {
          console.log($stateParams.id1);
          console.log($stateParams.id2);
          if ($stateParams.id2==='') {
          	return 'app/' + $stateParams.id1 + '/exam7.html'
          } else {
            return 'app/' + $stateParams.id1 + $stateParams.id2 + '/exam7.html'
          }
          // return 'app/exam7/exam7.html';
        },
        controller: 'Exam7Ctrl'
      });
  });