(function (angular) {
    'use strict';

    angular.module('webShop').config(['$stateProvider', function ($stateProvider) {
            $stateProvider
            	.state('allUser',
                {
                    url: '/allUser',
                    views:
                    {
  
                        'navbar': {
                            templateUrl: 'partials/navbar.html',
                            controller : 'navbarController'
                            
                         },
                         'content':{
                        	 
                        	 templateUrl: 'app/user/allUser.html',
                        	 controller: 'allUserController'
                         }
                         
                    }
                })
    }])
})(angular);