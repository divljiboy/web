(function (angular) {
       
    angular.module('webShop')
    	.controller('editShopController', ['$window','$scope', '$state', '$rootScope', 'shopService', '$stateParams', function ($window,$scope, $state, $rootScope, shopService, $stateParams) {
		      
		      
		      $scope.editFlag = false;
		      
		        if($stateParams.operacija === "edit"){
		            $scope.editFlag = true;
		            
		        }

		      
		      $scope.editProduct = function(){
		    	   console.log('from edit put')
		    	   shopService.put($scope.shop)
		    	   $rootScope.product = null;
		    	   $state.go('allShops')
		       }
   }]);


}
)(angular);