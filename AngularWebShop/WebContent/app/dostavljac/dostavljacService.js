

(function () {

    angular.module('webShop')
        .service('dostavljacService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function (onSuccess, onError) {
                    
                  return $http.get('/AngularWebShop/rest/dostavljac/get');
                },
                put: function (product, onSucces, onError)
                    {
                	console.log('put put')
                  return $http.put('/AngularWebShop/rest/dostavljac/edit', product)
                
                },
                post: function (product, onSuccess, onError) {
                    	$http.post('/AngularWebShop/rest/dostavljac/add', product).success(function(data) {
      		    		  
 		    			  return data;
                    });
                    	
                    	
                },
                deleteSlog : function(bla,onSuccess,onError)
                {
                
                  return  $http.post('/AngularWebShop/rest/dostavljac/delete/'+bla);
                   
                }
            }




        }]);

})();