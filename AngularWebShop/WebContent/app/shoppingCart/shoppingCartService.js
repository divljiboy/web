(function () {

    angular.module('webShop')
        .service('shoppingCartService', ['$http', function ($http) {
            //metode servisa
            return {
               getAll: function (name) {
                      
                      return $http.get('/AngularWebShop/rest/shoppingCart/get/'+name.username)
                      
                    },
               getAllHistory: function () {
                        
                        return $http.get('/AngularWebShop/rest/shoppingCart/getAllHistory')
                        
                      },
                post: function (product,kolicina,name) {
                		
                		
                    	return $http.post('/AngularWebShop/rest/shoppingCart/add/'+kolicina+'/'+name.username , product)
                    	
                },
                deleteSlog : function(sifra)
                {
                
                  return  $http.post('/AngularWebShop/rest/shoppingCart/delete/'+sifra);
                   
                },
                deleteAll: function(){
                	return $http.post('/AngularWebShop/rest/shoppingCart/deleteAll');
                },
                postAll: function (korpa) {
            	
            		
                	return $http.post('/AngularWebShop/rest/shoppingCart/addAllToHistory/', korpa)
                	
                },
                postZalba: function (korpa) {
            	
            		
                	return $http.post('/AngularWebShop/rest/zalba/addZalba', korpa)
                	
                }
                
                
            }




        }]);

})();