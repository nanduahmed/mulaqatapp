
//angular.module('ionicApp', ['ionic'])
mod

.controller('SignInCtrl', function($scope, $state, $ionicLoading) {
            
            $scope.signIn = function(user) {
            initializeParse();
            $scope.show();

            loginUsingParse(user.username,user.password)
            .then (function(user){
                    $scope.showSpinner = false;
                   $scope.hide();
                    $state.go('tabs.home');
                   },function(error,user){
                   $scope.hide();
                   });
            }
            
            $scope.show = function() {
            $ionicLoading.show({
                               template: '<ion-spinner></ion-spinner>',
                               });
            };
            
            $scope.hide = function(){
            $ionicLoading.hide();
            };
})


