(function (angular) {
    

    angular.module('webShop', ['ui.router']);
    angular.module('webShop').controller("homeController", ['$scope', '$rootScope','$state', function ($scope, $rootScope,$state) {
    	 $rootScope.inicijalizacija = function(){
             $rootScope.product = null;
         }

         $rootScope.inicijalizacija();
         
    }]);


})(angular);
