(function () {

    angular.module('webShop')
        .service('shoppingCartService', ['$http', function ($http) {
            //metode servisa
            return {
               getAll: function () {
                      
                      return $http.get('/AngularWebShop/rest/shoppingCart/get')
                      
                    },
                post: function (product,kolicina) {
                		console.log(kolicina)
                		
                    	return $http.post('/AngularWebShop/rest/shoppingCart/add/'+kolicina, product)
                    	
                },
                deleteSlog : function(sifra)
                {
                
                  return  $http.post('/AngularWebShop/rest/shoppingCart/delete/'+sifra);
                   
                },
                deleteAll: function(){
                	return $http.post('/AngularWebShop/rest/shoppingCart/deleteAll');
                },
                postAll: function (korpa) {
            	
            		
                	return $http.post('/AngularWebShop/rest/shoppingCart/addAllToHistory', korpa)
                	
            }
                
                
            }




        }]);

})();