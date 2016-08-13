(function () {

    angular.module('webShop')
        .service('recenzijaService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function () {
                    
                  return $http.get('http://localhost:8080/AngularWebShop/rest/recenzija/getRecenzija');
                },
                put: function (product)
                    {
                	
                 return $http.put('http://localhost:8080/AngularWebShop/rest/recenzija/editRecenzija', product)
                
                },
                post: function (product) {
                    	$http.post('http://localhost:8080/AngularWebShop/rest/recenzija/addRecenzija', product).success(function(data) {
        		    		  
   		    			  return data;
                      });
                    	
                },
                deleteSlog : function(bla)
                {
                
                 return $http.post('http://localhost:8080/AngularWebShop/rest/recenzija/deleteRecenzija/'+bla);
                   
                }
                ,getProductByShop : function (shopName)
                {	
                	return $http.get('http://localhost:8080/AngularWebShop/rest/recenzija/getRecenzijaByProduct/'+shopName)
                }
            }




        }]);

})();