(function () {

    angular.module('webShop')
        .service('recenzijaService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function () {
                    
                  return $http.get('/AngularWebShop/rest/recenzija/getRecenzija');
                },
                getRecenzija: function(proizvod) {
                	return $http.get('/AngularWebShop/rest/recenzija/getRecenzijaProizvod/'+proizvod);
                },
                put: function (product)
                    {
                	
                 return $http.put('/AngularWebShop/rest/recenzija/editRecenzija', product)
                
                },
                post: function (product) {
                    	return $http.post('/AngularWebShop/rest/recenzija/addRecenzija', product).success(function(data) {
        		    		  
   		    			  return data;
                      });
                    	
                },
                deleteSlog : function(bla)
                {
                
                 return $http.post('/AngularWebShop/rest/recenzija/deleteRecenzija/'+bla);
                   
                },
                ocenivanjeKomentara : function(recenzija,ocena)
                {
                
                 return $http.post('/AngularWebShop/rest/recenzija/ocenjivanje/'+ocena,recenzija );
                   
                }
                ,getProductByShop : function (shopName)
                {	
                	return $http.get('/AngularWebShop/rest/recenzija/getRecenzijaByProduct/'+shopName)
                }
            }




        }]);

})();