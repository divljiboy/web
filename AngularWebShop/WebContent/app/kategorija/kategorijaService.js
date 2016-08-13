(function () {

    angular.module('webShop')
        .service('kategorijaService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function () {
                    
                  return $http.get('/AngularWebShop/rest/kategorija/getKategorija');
                },
                put: function (product)
                    {
                	
                  return $http.put('/AngularWebShop/rest/kategorija/editKategorija', product)
                
                },
                post: function (product) {
                    	$http.post('/AngularWebShop/rest/kategorija/addKategorija', product).then(function(data) {
      		    		  
 		    			  return data;
                    });
                    	
                    	
                },
                deleteSlog : function(bla)
                {
                
                  return  $http.post('/AngularWebShop/rest/kategorija/deleteKategorija/'+bla);
                   
                }
            }




        }]);

})();