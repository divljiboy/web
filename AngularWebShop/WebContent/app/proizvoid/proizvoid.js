(function (angular) {
    'use strict';

    angular.module('webShop',['ui.router']).config(['$stateProvider', function ($stateProvider) {
    	 $urlRouterProvider.otherwise('/');   
    	$stateProvider
            .state('sviProizvodi',
                {
                    url: '/',
                    views: {
                        'content': {
                        	templateUrl: 'partials/products.html'/*,
                            controller: 'sveDrzaveController'*/
                        },
                        'navbar': {
                            templateUrl: 'partials/navbar.html'/*,
                            controller: 'navbarController'*/
                        }
                     }
                }).state('dodajProizvod',
            {
                url: '/proizvod/dodaj',
                views: {
                    'content': {
                    	templateUrl: '/dodajProzivod.html'/*,
                        controller: 'sveDrzaveController'*/
                    },
                    'navbar': {
                        templateUrl: 'partials/navbar.html'/*,
                        controller: 'navbarController'*/
                    }
                 }
            });
        }]);
})(angular);

