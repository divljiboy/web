(function (angular) {
       
    angular.module('webShop')
    	.controller('addShopController', ['$window','$scope', '$state', '$rootScope', 'shopService', '$stateParams', function ($window,$scope, $state, $rootScope, shopService, $stateParams) {
    			
    		  if ($rootScope.shop == null)
		    	   $rootScope.shop = {};
		       
		       $scope.addFlag = false;
			     
			      
		       if($stateParams.operacija === "add"){
		            $scope.addFlag = true;
		            
		        }
    		
    		
		       $scope.addShop = function(){
		    	   
		    	   shopService.post($scope.shop)
		    	   $state.go('allShops')
		       }
		       
		       $scope.cancelShop = function(){
		    	   $rootScope.shop = {}
		    	   $state.go('allShops')
		       }
   }]);


}
)(angular);