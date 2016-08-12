(function (angular) {
    'use strict';

    angular.module('webShop').config(['$stateProvider', function ($stateProvider) {
            $stateProvider
            .state('allKategorija',
                {
                    url: '/allKategorija',
                    views:
                    {
  
                        'navbar': {
                            templateUrl: 'partials/navbar.html'
                         },
                         'content':{
                        	 
                        	 templateUrl: 'app/kategorija/allKategorije.html',
                        	 controller: 'allKategorijeController'
                         }
                         
                    }
               })
               .state('addKategorija',
                  	 {
                  	  	url:'/addKategorija/{operacija}/{kat}',
                  	  	views:
                  	  	{
                  	  		'navbar':{
                  	  			templateUrl: 'partials/navbar.html'
                  	  		},
                  	  		'content':{
                  	  			templateUrl: 'app/kategorija/addKategorija.html',
                  	  			controller: 'addKategorijaController'
                  	  		}
                  	  		
                  	  	}
                  	
                  	  
                       })
                     .state('editKategorija',{
                  	   url:'/editKategorija/{operacija}',
                  	  	views:
                  	  	{
                  	  		'navbar':{
                  	  			templateUrl: 'partials/navbar.html'
                  	  		},
                  	  		'content':{
                  	  			templateUrl: 'app/kategorija/addKategorija.html',
                  	  			controller: 'editKategorijaController'
                  	  		}
                  	  		
                  	  	}
                     })
                    
   
                }]);
})(angular);
