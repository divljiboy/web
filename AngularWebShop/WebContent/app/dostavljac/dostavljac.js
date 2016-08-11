(function (angular) {
    'use strict';

    angular.module('webShop').config(['$stateProvider', function ($stateProvider) {
            $stateProvider
            .state('allDostavljac',
                {
                    url: '/allDostavljac',
                    views:
                    {
  
                        'navbar': {
                            templateUrl: 'partials/navbar.html'
                         },
                         'content':{
                        	 
                        	 templateUrl: 'app/dostavljac/alldostavljac.html',
                        	 controller: 'allDostavljacController'
                         }
                         
                    }
               })
               .state('addDostavljac',
                  	 {
                  	  	url:'/addDostavljac/{operacija}',
                  	  	views:
                  	  	{
                  	  		'navbar':{
                  	  			templateUrl: 'partials/navbar.html'
                  	  		},
                  	  		'content':{
                  	  			templateUrl: 'app/dostavljac/addDostavljac.html',
                  	  			controller: 'addDostavljacController'
                  	  		}
                  	  		
                  	  	}
                  	
                  	  
                       })
                     .state('editDostavljac',{
                  	   url:'/editDostavljac/{operacija}',
                  	  	views:
                  	  	{
                  	  		'navbar':{
                  	  			templateUrl: 'partials/navbar.html'
                  	  		},
                  	  		'content':{
                  	  			templateUrl: 'app/dostavljac/addDostavljac.html',
                  	  			controller: 'editDostavljacController'
                  	  		}
                  	  		
                  	  	}
                     })
                    
   
                }]);
})(angular);
