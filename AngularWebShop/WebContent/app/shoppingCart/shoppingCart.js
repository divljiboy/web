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
                            templateUrl: 'partials/navbar.html'
                            
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
                            templateUrl: 'partials/navbar.html'
                            
                         },
                         'content':{
                        	 
                        	 templateUrl: 'app/shoppingCart/selectedShops.html',
                        	 controller: 'selectedShopController'
                         }
                         
                    }
                })
   
                }]);
})(angular);