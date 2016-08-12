(function (angular) {
       
    angular.module('webShop')
    	.controller('navbarController', ['$window','$scope', '$state', '$rootScope', 'shopService', '$stateParams', function ($window,$scope, $state, $rootScope, shopService, $stateParams) {
    		
    		var podaci=function(){ shopService.getAll().then(function(response) {
    			console.log('bilo sta');
    			
    			$scope.allShop = response.data
    			//console.log(response.data);
    			/*console.log($scope.allShop[0].naziv)
    			console.log($scope.allShop[1].naziv)*/
    	    });
    		};
    	 
    		podaci();
    	 
    		$scope.isOpen = function(){
    			
    			shopService.getAll().then(function(response) {
        			
        			
        			$scope.allShop = response.data
        			console.log($scope.allShop[0].naziv)
        			console.log($scope.allShop[1].naziv)
        	    });
    		}
    		$scope.toggled = function(open) {
    		    $log.log('Dropdown is now: ', open);
    		    
    		    shopService.getAll().then(function(response) {
        			console.log('bilo sta');
        			
        			$scope.allShops = response.data
        			console.log($scope.allShop[0].naziv)
        			console.log($scope.allShop[1].naziv)
        	    });
    		  };
   }]);


}
)(angular);