(function (angular) {
       
    angular.module('webShop')
    	.controller('editProductController', ['$window','$scope', '$state', '$rootScope', 'productsService', '$stateParams', function ($window,$scope, $state, $rootScope, productsService, $stateParams) {
		      
		      
		      $scope.editFlag = false;
		      
		        if($stateParams.operacija === "edit"){
		            $scope.editFlag = true;
		            
		        }

		      
		      $scope.editSlog = function(){
		    	   console.log('from edit put')
		    	   productsService.put($scope.product)
		    	   $rootScope.product = null;
		    	   $state.go('allProducts')
		       }
   }]);


}
)(angular);