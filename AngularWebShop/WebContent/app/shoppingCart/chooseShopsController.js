(function (angular) {
       
    angular.module('webShop')
    	.controller('chooseShopsController', ['$window','$scope', '$state', '$rootScope', 'shopService','productsService','shoppingCartService', '$stateParams', function ($window,$scope, $state, $rootScope, shopService,productsService,shoppingCartService, $stateParams) {
    		
    		var podaci=function(){ 
    			productsService.getAll().then(function(response) {	
    			
    			$scope.allProducts = response.data
    			
    	    	});
    			shopService.getAll().then(function(response) {	
        			
        			$scope.allShops = response.data
        			
        	    	});
    		};
    		
    		$scope.addToShoppingCart = function(product,kolicina){
    			
    			console.log(product.naziv)
    			console.log(kolicina)
    			shoppingCartService.post(product,kolicina).then(function(response) {	
        			
        		
        			
        	    	});
    			
    			
    		}
    		
    		
    		podaci();
    	 
   }]);


}
)(angular);