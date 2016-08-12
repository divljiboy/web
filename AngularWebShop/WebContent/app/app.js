(function (angular) {
    

    angular.module('webShop', ['ui.router','ui.grid','ui.grid.selection']);
    angular.module('webShop').controller("homeController", ['$scope', '$rootScope','$state', function ($scope, $rootScope,$state) {
    	 $rootScope.inicijalizacija = function(){
             $rootScope.product = null;
             $rootScope.allShop = null;
             $rootScope.dostavljac=null;
         }

         $rootScope.inicijalizacija();
         
    }]);


})(angular);
