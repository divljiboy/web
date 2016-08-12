(function (angular) {
    

    angular.module('webShop', ['ui.router','ui.bootstrap','ui.grid','ui.grid.selection','ngAnimate']);
    angular.module('webShop').controller("homeController", ['$scope', '$rootScope','$state', function ($scope, $rootScope,$state) {
    	 $rootScope.inicijalizacija = function(){
             $rootScope.product = null;
             $rootScope.allShop = null;
         }

         $rootScope.inicijalizacija();
         
    }]);


})(angular);
