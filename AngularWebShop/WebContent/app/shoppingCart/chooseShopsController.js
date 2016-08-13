(function (angular) {
       
    angular.module('webShop')
    	.controller('chooseShopsController', ['$window','$scope', '$state', '$rootScope', 'shopService','productsService', '$stateParams', function ($window,$scope, $state, $rootScope, shopService,productsService, $stateParams) {
    		
    		var podaci=function(){ 
    			productsService.getAll().then(function(response) {	
    			
    			$scope.allProducts = response.data
    			
    	    	});
    			shopService.getAll().then(function(response) {	
        			
        			$scope.allShops = response.data
        			
        	    	});
    		};
    		
    		
    		
    		
    		podaci();
    	 
   }]);


}
)(angular);