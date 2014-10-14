'use strict';

angular.module('angularRouteApp')
  .config(function ($stateProvider, $logProvider) {
  	
  	$logProvider.debugEnabled(true);

    $stateProvider
      .state('exam2', {
        url: '/exam2/{id:[0-9|a-z]}',
        templateUrl: function($stateParams) {
          console.log($stateParams.id);
          return 'app/exam2/'+$stateParams.id+'/exam2.html';
        },
        controller: 'Exam2Ctrl',
        onEnter: function($stateParams, $log){ // ステート開始時に呼ばれる
          $log.debug('onEnter : ', $stateParams.id);
        },
        onExit: function($stateParams, $log){ // ステート終了時に呼ばれる
          $log.debug('onExit : ', $stateParams.id);
        }
      });
  });