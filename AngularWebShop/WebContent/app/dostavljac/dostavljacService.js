

(function () {

    angular.module('webShop')
        .service('dostavljacService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function () {
                    
                  return $http.get('/AngularWebShop/rest/dostavljac/get');
                },
                put: function (product)
                    {
                	
                  return $http.put('/AngularWebShop/rest/dostavljac/edit', product)
                
                },
                post: function (product) {
                    	$http.post('/AngularWebShop/rest/dostavljac/add', product).success(function(data) {
      		    		  
 		    			  return data;
                    });
                    	
                    	
                },
                deleteSlog : function(bla)
                {
                
                  return  $http.post('/AngularWebShop/rest/dostavljac/delete/'+bla);
                   
                }
            }




        }]);

})();