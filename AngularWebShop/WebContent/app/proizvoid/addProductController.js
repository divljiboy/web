(function (angular) {
       
    angular.module('webShop')
    	.controller('addProductController', ['$window','$scope', '$state', '$rootScope', 'productsService', '$stateParams', function ($window,$scope, $state, $rootScope, productsService, $stateParams) {
		       console.log('from addProducts')
		       
		       if ($rootScope.drzava == null)
		    	   $rootScope.drzava = {};
		       
		       $scope.addFlag = false;
			      console.log($stateParams.operacija)
		       if($stateParams.operacija === "add"){
		            $scope.addFlag = true;
		            
		        }
		     
		       $scope.addProduct = function(){
		    	   
		    	   productsService.post($scope.product)
		    	   $state.go('allProducts')
		       }
   }]);


}
)(angular);