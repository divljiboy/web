(function (angular) {
    'use strict';

    angular.module('webShop').config(['$stateProvider', function ($stateProvider) {
            $stateProvider
            	.state('allRecenzija',
                {
                    url: '/allRecenzija',
                    views:
                    {
  
                        'navbar': {
                            templateUrl: 'partials/navbar.html',
                            controller : 'navbarController'
                            
                         },
                         'content':{
                        	 
                        	 templateUrl: 'app/recenzija/recenzija.html',
                        	 controller: 'allRecenzijaController'
                         }
                         
                    }
                })
                .state('proizvodRecenzije',
                {
                    url: '/proizvodRecenzije/{proizvod}',
                    views:
                    {
  
                        'navbar': {
                            templateUrl: 'partials/navbar.html',
                            controller : 'navbarController'
                            
                         },
                         'content':{
                        	 
                        	 templateUrl: 'app/recenzija/proizvodRecenzije.html',
                        	 controller: 'proizvodRecenzijaController'
                         }
                         
                    }
                })
                .state('addRecenzija',
            	 {
            	  	url:'/addRecenzija/{operacija}',
            	  	views:
            	  	{
            	  		'navbar':{
            	  			templateUrl: 'partials/navbar.html',
                            controller : 'navbarController'
            	  		},
            	  		'content':{
            	  			templateUrl: 'app/recenzija/addRecenzija.html',
            	  			controller: 'addRecenzijaController'
            	  		}
            	  		
            	  	}
            	
            	  
                 })
                 .state('editRecenzija',{
                  	   url:'/editRecenzija/{operacija}',
                  	  	views:
                  	  	{
                  	  		'navbar':{
                  	  			templateUrl: 'partials/navbar.html',
                                controller : 'navbarController'
                              
                  	  		},
                  	  		'content':{
                  	  			templateUrl: 'app/recenzija/addRecenzija.html',
                  	  			controller: 'editRecenzijaController'
                  	  		}
                  	  		
                  	  	}
                     })
                    
   
                }]);
})(angular);