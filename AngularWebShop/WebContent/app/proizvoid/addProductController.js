(function (angular) {
       
    angular.module('webShop')
    	.controller('addProductController', ['$window','$scope', '$state', '$rootScope', 'productsService', '$stateParams', function ($window,$scope, $state, $rootScope, productsService, $stateParams) {
		       console.log('from addProducts')
		 
		       $scope.addProduct = function(){
		    	   
		    	   productsService.post($scope.product);
		    	   $window.history.back();
		       }
   }]);


}
)(angular);