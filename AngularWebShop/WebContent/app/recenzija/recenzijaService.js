(function () {

    angular.module('webShop')
        .service('recenzijaService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function () {
                    
                  return $http.get('/AngularWebShop/rest/recenzija/getRecenzija');
                },
                put: function (product)
                    {
                	
                 return $http.put('/AngularWebShop/rest/recenzija/editRecenzija', product)
                
                },
                post: function (product) {
                    	$http.post('/AngularWebShop/rest/recenzija/addRecenzija', product).success(function(data) {
        		    		  
   		    			  return data;
                      });
                    	
                },
                deleteSlog : function(bla)
                {
                
                 return $http.post('/AngularWebShop/rest/recenzija/deleteRecenzija/'+bla);
                   
                }
                ,getProductByShop : function (shopName)
                {	
                	return $http.get('/AngularWebShop/rest/recenzija/getRecenzijaByProduct/'+shopName)
                }
            }




        }]);

})();