(function (angular) {
    'use strict';

    angular.module('webShop').config(['$stateProvider', function ($stateProvider) {
            $stateProvider
            .state('allProducts',
                {
                    url: '/allProducts',
                    views:
                    {
  
                        'navbar': {
                            templateUrl: 'partials/navbar.html'
                         },
                         'content':{
                        	 
                        	 templateUrl: 'app/proizvoid/products.html',
                        	 controller: 'allProductsController'
                         }
                         
                    }
               })
              .state('addProducts',
            	 {
            	  	url:'/addProducts',
            	  	views:
            	  	{
            	  		'navbar':{
            	  			templateUrl: 'partials/navbar.html'
            	  		},
            	  		'content':{
            	  			templateUrl: 'app/proizvoid/addProduct.html',
            	  			controller: 'addProductController'
            	  		}
            	  		
            	  	}
            	
            	  
                 })
                     
                    
   
                }]);
})(angular);
