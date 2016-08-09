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
                  	  	url:'/addProducts/{operacija}',
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
                     .state('editProducts',{
                  	   url:'/editProducts/{operacija}',
                  	  	views:
                  	  	{
                  	  		'navbar':{
                  	  			templateUrl: 'partials/navbar.html'
                  	  		},
                  	  		'content':{
                  	  			templateUrl: 'app/proizvoid/addProduct.html',
                  	  			controller: 'editProductController'
                  	  		}
                  	  		
                  	  	}
                     })
                    
   
                }]);
})(angular);
