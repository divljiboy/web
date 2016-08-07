(function (angular) {
    'use strict';

    angular.module('webShop').config(['$stateProvider', function ($stateProvider) {
            $stateProvider
            .state('bla',
                {
                    url: '/bla',
                    views:
                    {
  
                        'navbar': {
                            templateUrl: 'partials/products.html'
                         },
                         'content':{
                        	 
                        	 templateUrl: 'partials/products.html'
                         }
            
                    }
                    
                }
            )
                }]);
})(angular);
