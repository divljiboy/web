(function (angular) {
       
    angular.module('webShop')
    	.controller('chooseShopsController', ['$window','$scope', '$state', '$rootScope', 'shopService','productsService','shoppingCartService', '$stateParams','$localStorage', function ($window,$scope, $state, $rootScope, shopService,productsService,shoppingCartService, $stateParams,$localStorage) {
    		
    		var podaci=function(){ 
    			productsService.getAll().then(function(response) {	
    			
    			$scope.allProducts = response.data
    			
    	    	});
    			shopService.getAll().then(function(response) {	
        			
        			$scope.allShops = response.data
        			
        	    	});
    		};
    		
    		$scope.addToShoppingCart = function(product,kolicina){
    			//console.log($localStorage.currentUser)
    			var name = $localStorage.currentUser
    		
    			shoppingCartService.post(product,kolicina,name).then(function(response) {	
        			
        		
        			
        	    	});
    			
    			
    		}
    		
    		
    		podaci();
    	 
   }]);


}
)(angular);