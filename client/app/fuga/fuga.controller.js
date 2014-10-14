'use strict';

angular.module('angularRouteApp')
  .controller('FugaCtrl', function ($scope, $location) {
    $scope.message = 'Hello';

    console.log('aaaaaa');

    $scope.submit = function(form) {
      
      console.log('form ok');

      console.log('ひとつめのディレクトリ:'+$scope.id1);
      console.log('ふたつめのディレクトリ:'+$scope.id2);

      if(form.$valid) {
      	console.log($scope.userType);
        // サービスを起動する
        // .successでurlを飛ばす
        $location.path($scope.id1+$scope.id2+'/hoge');
      }
    }
  });
