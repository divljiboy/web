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
                            templateUrl: 'partials/navbar.html',
                            controller : 'navbarController'
                         },
                         'content':{
                        	 
                        	 templateUrl: 'app/proizvoid/products.html',
                        	 controller: 'allProductsController'
                         }
                         
                    }
               })
               .state('addProducts',
                  	 {
                  	  	url:'/addProducts/{operacija}/{shop}',
                  	  	views:
                  	  	{
                  	  		'navbar':{
                  	  			templateUrl: 'partials/navbar.html',
                                controller : 'navbarController'
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
                  	  			templateUrl: 'partials/navbar.html',
                                controller : 'navbarController'
                  	  		},
                  	  		'content':{
                  	  			templateUrl: 'app/proizvoid/addProduct.html',
                  	  			controller: 'editProductController'
                  	  		}
                  	  		
                  	  	}
                     })
                     .state('akcijaProducts',{
                  	   url:'/akcijaProducts',
                  	  	views:
                  	  	{
                  	  		'navbar':{
                  	  			templateUrl: 'partials/navbar.html',
                                controller : 'navbarController'
                  	  		},
                  	  		'content':{
                  	  			templateUrl: 'app/proizvoid/ackijaProduct.html',
                  	  			controller: 'akcijaProductController'
                  	  		}
                  	  		
                  	  	}
                     })
   
                }]);
})(angular);
