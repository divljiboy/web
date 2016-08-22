(function () {

    angular.module('webShop')
        .service('shoppingCartService', ['$http', function ($http) {
            //metode servisa
            return {
               getAll: function (name) {
                      
                      return $http.get('/AngularWebShop/rest/shoppingCart/get/'+name.username)
                      
                    },
               getAllHistory: function (user) {
                        
                        return $http.get('/AngularWebShop/rest/shoppingCart/getAllHistory/'+user.username)
                        
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
                postAll: function (korpa,user) {
            	
            	
                	return $http.post('/AngularWebShop/rest/shoppingCart/addAllToHistory/'+user.username, korpa)
                	
                },
                postZalba: function (korpa) {
            	
            		
                	return $http.post('/AngularWebShop/rest/zalba/addZalba', korpa)
                	
                }
                
                
            }




        }]);

})();