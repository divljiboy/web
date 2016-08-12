(function () {

    angular.module('webShop')
        .service('productsService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function () {
                    
                  return $http.get('/AngularWebShop/rest/product/getJustProducts');
                },
                put: function (product)
                    {
                	
                  return $http.put('/AngularWebShop/rest/product/editProduct', product)
                
                },
                post: function (product) {
                    	$http.post('/AngularWebShop/rest/product/add', product).success(function(data) {
        		    		  
   		    			  return data;
                      });
                    	
                },
                deleteSlog : function(bla)
                {
                
                  return  $http.post('/AngularWebShop/rest/product/delete/'+bla);
                   
                }
                ,getProductByShop : function (shopName)
                {	console.log(shopName)
                	return $http.get('/AngularWebShop/rest/product/getProductByShop/'+shopName)
                }
            }




        }]);

})();