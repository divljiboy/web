(function (angular) {
    'use strict';

    angular.module('webShop').config(['$stateProvider', function ($stateProvider) {
            $stateProvider
            	.state('chooseShop',
                {
                    url: '/chooseShop/{shop}',
                    views:
                    {
  
                        'navbar': {
                            templateUrl: 'partials/navbar.html',
                            controller : 'navbarController'
                            
                         },
                         'content':{
                        	 
                        	 templateUrl: 'app/shoppingCart/chooseShops.html',
                        	 controller: 'chooseShopsController'
                         }
                         
                    }
                })
               .state('selectShop',
                {
                    url: '/selectShop/{shop}',
                    views:
                    {
  
                        'navbar': {
                            templateUrl: 'partials/navbar.html',
                            controller : 'navbarController'
                            
                         },
                         'content':{
                        	 
                        	 templateUrl: 'app/shoppingCart/selectedShops.html',
                        	 controller: 'selectedShopController'
                         }
                         
                    }
                })
                .state('shoppingCart',
                {
                    url: '/shoppingCart',
                    views:
                    {
  
                        'navbar': {
                            templateUrl: 'partials/navbar.html',
                            controller : 'navbarController'
                            
                         },
                         'content':{
                        	 templateUrl: 'app/shoppingCart/shoppingCart.html',
                        	 controller: 'shoppingCartController' 
                        	 
                         }
                         
                    }
                })
                .state('historyCart',
                {
                    url: '/historyCart',
                    views:
                    {
  
                        'navbar': {
                            templateUrl: 'partials/navbar.html',
                            controller : 'navbarController'
                            
                         },
                         'content':{
                        	 templateUrl: 'app/shoppingCart/historyCart.html',
                        	 controller: 'historyCartController' 
                        	 
                         }
                         
                    }
                })
                 .state('zalba',
                {
                    url: '/zalba',
                    views:
                    {
  
                        'navbar': {
                            templateUrl: 'partials/navbar.html',
                            controller : 'navbarController'
                            
                         },
                         'content':{
                        	 templateUrl: 'app/shoppingCart/zalba.html',
                        	 controller: 'zalbaController' 
                        	 
                         }
                         
                    }
                })
                 .state('zelje',
                {
                    url: '/zelje',
                    views:
                    {
  
                        'navbar': {
                            templateUrl: 'partials/navbar.html',
                            controller : 'navbarController'
                            
                         },
                         'content':{
                        	 templateUrl: 'app/shoppingCart/zelja.html',
                        	 controller: 'zeljeController' 
                        	 
                         }
                         
                    }
                })
   
                }]);
})(angular);