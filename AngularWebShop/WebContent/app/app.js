(function (angular) {
    

    angular.module('webShop', ['ui.router','ui.grid','ui.grid.selection']);
    angular.module('webShop').controller("homeController", ['$scope', '$rootScope','$state', function ($scope, $rootScope,$state) {
    	 $rootScope.inicijalizacija = function(){
             $rootScope.product = null;
             $rootScope.shop = null;
             $rootScope.dostavljac=null;
             $rootScope.kategorija=null;
             
         }

         $rootScope.inicijalizacija();
         
    }]);


})(angular);
