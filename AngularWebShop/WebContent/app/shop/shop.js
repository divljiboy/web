(function (angular) {
    'use strict';

    angular.module('webShop').config(['$stateProvider', function ($stateProvider) {
            $stateProvider
            	.state('allShops',
                {
                    url: '/allShops',
                    views:
                    {
  
                        'navbar': {
                            templateUrl: 'partials/navbar.html'
                         },
                         'content':{
                        	 
                        	 templateUrl: 'app/shop/allShops.html',
                        	 controller: 'allShopsController'
                         }
                         
                    }
                })
                .state('addShop',
            	 {
            	  	url:'/addShop/{operacija}',
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
                 .state('editShop',{
                  	   url:'/editShop/{operacija}',
                  	  	views:
                  	  	{
                  	  		'navbar':{
                  	  			templateUrl: 'partials/navbar.html'
                  	  		},
                  	  		'content':{
                  	  			templateUrl: 'app/shop/addShop.html',
                  	  			controller: 'editShopController'
                  	  		}
                  	  		
                  	  	}
                     })
                    
   
                }]);
})(angular);