(function () {

    angular.module('webShop')
        .service('productsService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function () {
                    
                  return $http.get('/AngularWebShop/rest/product/getJustProducts');
                },
                put: function (produc)
                    {
                	console.log('put put')
                  return $http.put('/AngularWebShop/rest/product/editProduct', product)
                
                },
                post: function (product) {
                    	$http.post('/AngularWebShop/rest/product/add', product).than(function(data) {
      		    		  
 		    			  return data;
                    });
                    	
                    	
                },
                deleteSlog : function(bla)
                {
                
                  return  $http.post('/AngularWebShop/rest/product/delete/'+bla);
                   
                }
            }




        }]);

})();