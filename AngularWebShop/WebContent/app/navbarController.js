(function (angular) {
       
    angular.module('webShop')
    	.controller('navbarController', ['$window','$scope', '$state', '$rootScope', 'shopService', '$stateParams', function ($window,$scope, $state, $rootScope, shopService, $stateParams) {
    		
    		var podaci=function(){ shopService.getAll().then(function(response) {
    			
    			$scope.allShop = response.data
    			
    	    });
    		};
    	 
    		podaci();
    	 
    		$scope.isOpen = function(){
    			
    			shopService.getAll().then(function(response) {
        			
        			
        			$scope.allShop = response.data
        			
        	    });
    		}
    		$scope.toggled = function(open) {
    		    $log.log('Dropdown is now: ', open);
    		    
    		    shopService.getAll().then(function(response) {
        			
        			$scope.allShops = response.data
        			
        	    });
    		  };
   }]);


}
)(angular);