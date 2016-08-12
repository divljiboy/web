(function () {

    angular.module('webShop')
        .service('kategorijaService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function () {
                    
                  return $http.get('/AngularWebShop/rest/kategorija/get');
                },
                put: function (product)
                    {
                	
                  return $http.put('/AngularWebShop/rest/kategorija/edit', product)
                
                },
                post: function (product) {
                    	$http.post('/AngularWebShop/rest/kategorija/add', product).then(function(data) {
      		    		  
 		    			  return data;
                    });
                    	
                    	
                },
                deleteSlog : function(bla)
                {
                
                  return  $http.post('/AngularWebShop/rest/kategorija/delete/'+bla);
                   
                }
            }




        }]);

})();