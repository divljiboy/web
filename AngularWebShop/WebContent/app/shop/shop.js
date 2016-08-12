(function (angular) {
    'use strict';

    angular.module('webShop').config(['$stateProvider', function ($stateProvider) {
            $stateProvider
            
              .state('addShop',
            	 {
            	  	url:'/addShop',
            	  	views:
            	  	{
            	  		'navbar':{
            	  			templateUrl: 'partials/navbar.html'
            	  		},
            	  		'content':{
            	  			templateUrl: 'app/shop/addShop.html',
            	  			controller: 'addShopController'
            	  		}
            	  		
            	  	}
            	
            	  
                 })
                    
   
                }]);
})(angular);