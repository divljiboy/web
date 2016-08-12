(function (angular) {
       
    angular.module('webShop')
    	.controller('addProductController', ['$window','$scope', '$state', '$rootScope', 'productsService', '$stateParams', function ($window,$scope, $state, $rootScope, productsService, $stateParams) {
		       console.log('from addProducts')
		       
		       
		       $scope.addFlag = false;
			      
		       if($stateParams.operacija === "add"){
		            $scope.addFlag = true;
		            
		        }
		     
		       $scope.addSlog = function(){
		    	   
		    	   productsService.post($scope.product)
		    	   $state.go('allProducts')
		       }
   }]);


}
)(angular);