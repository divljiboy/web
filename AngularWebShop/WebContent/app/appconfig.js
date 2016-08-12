(function(angular){

    angular.module('webShop').config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

    	  $urlRouterProvider.otherwise('/home');
        $stateProvider
          .state('home', {
              url: '/home',
              views: {
                  'navbar': {
                      templateUrl: 'partials/navbar.html',
                      controller: 'navbarController'
                  }
              }
          });

        
    }]);

  
})(angular);