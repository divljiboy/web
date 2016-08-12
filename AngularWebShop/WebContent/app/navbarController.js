(function (angular) {
       
    angular.module('webShop')
    	.controller('navbarController', ['$window','$scope', '$state', '$rootScope', 'shopService', '$stateParams', function ($window,$scope, $state, $rootScope, shopService, $stateParams) {
    			console.log('fafafa')
    		var podaci=function(){ shopService.getAll().then(function(response) {
    			
    			console.log('allafas')
    	     
    	    });
    		};
    	 
    		podaci();
    	 
    		 
   }]);


}
)(angular);