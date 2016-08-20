(function (angular) {
    'use strict';

    angular.module('webShop').config(['$stateProvider', function ($stateProvider) {
            $stateProvider
            	.state('login',
                {
                    url: '/login',
                    views:
                    {
                    	'content':{
                        	 
                        	 templateUrl: 'app/login/login.html',
                        	 controller: 'loginController'
                         }
                         
                    }
                })
                .state('signUp',
                {
                    url: '/signUp',
                    views:
                    {
                    	'content':{
                        	 
                        	 templateUrl: 'app/login/signUp.html',
                        	 controller: 'signUpController'
                         }
                         
                    }
                })
   
                }]);
})(angular);