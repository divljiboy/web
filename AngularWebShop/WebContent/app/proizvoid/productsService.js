(function () {

    angular.module('webShop')
        .service('productsService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function () {
                    
                  return $http.get('/AngularWebShop/rest/product/getProizvod');
                },
                put: function (product)
                    {
                	
                 return $http.put('/AngularWebShop/rest/product/editProizvod', product)
                
                },
                post: function (product) {
                    	$http.post('/AngularWebShop/rest/product/addProizvod', product).success(function(data) {
        		    		  
   		    			  return data;
                      });
                    	
                },
                deleteSlog : function(bla)
                {
                
                 return $http.post('/AngularWebShop/rest/product/deleteProizvod/'+bla);
                   
                }
                ,getProductByShop : function (shopName)
                {	
                	return $http.get('/AngularWebShop/rest/product/getProductByShop/'+shopName)
                }
            }




        }]);

})();