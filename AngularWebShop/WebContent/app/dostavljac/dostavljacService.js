

(function () {

    angular.module('webShop')
        .service('dostavljacService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function () {
                    
                  return $http.get('/AngularWebShop/rest/dostavljac/getDostavljac');
                },
                put: function (product)
                    {
                	
                  return $http.put('/AngularWebShop/rest/dostavljac/editDostavljac', product)
                
                },
                post: function (product) {
                    	$http.post('/AngularWebShop/rest/dostavljac/addDostavljac', product).success(function(data) {
      		    		  
 		    			  return data;
                    });
                    	
                    	
                },
                deleteSlog : function(bla)
                {
                
                  return  $http.post('/AngularWebShop/rest/dostavljac/deleteDostavljac/'+bla);
                   
                }
            }




        }]);

})();