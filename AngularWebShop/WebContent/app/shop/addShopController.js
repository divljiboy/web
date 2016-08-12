(function (angular) {
       
    angular.module('webShop')
    	.controller('addShopController', ['$window','$scope', '$state', '$rootScope', 'shopService', '$stateParams', function ($window,$scope, $state, $rootScope, shopService, $stateParams) {
    			
    		   
		       $scope.addFlag = false;
			     
		       if($stateParams.operacija === "add"){
		            $scope.addFlag = true;
		            
		        }
		     
		       $scope.addSlog = function(){
		    	  
		    	   shopService.post($scope.shop);
		    	
		
		    	   $state.go('allShops');
		       }
		       $scope.cancelSlog=function(){
			    	  $window.history.back();
			   };
   }]);


}
)(angular);