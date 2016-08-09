(function () {

    angular.module('webShop')
        .service('productsService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function (onSuccess, onError) {
                    
                  return $http.get('/AngularWebShop/rest/product/getJustProducts');
                },
                put: function (product, onSucces, onError)
                    {
                	console.log('put put')
                  return $http.put('/AngularWebShop/rest/product/editProduct', product)
                
                },
                post: function (product, onSuccess, onError) {
                    	$http.post('/AngularWebShop/rest/product/add', product).success(function(data) {
      		    		  
 		    			  return data;
                    });
                    	
                    	
                },
                deleteSlog : function(bla,onSuccess,onError)
                {
                
                  return  $http.post('/AngularWebShop/rest/product/delete/'+bla);
                   
                }
            }




        }]);

})();