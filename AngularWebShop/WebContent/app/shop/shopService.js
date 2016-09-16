(function () {

    angular.module('webShop')
        .service('shopService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function () {
                    
                  return $http.get('/AngularWebShop/rest/shop/getShop')
                  
                },
                put: function (shop)
                    {
                	
                  return $http.put('/AngularWebShop/rest/shop/editShop', shop)
                
                },
                post: function (shop) {
                    	$http.post('/AngularWebShop/rest/shop/addShop', shop)
                    	
                },
                deleteSlog : function(bla)
                {
                
                  return  $http.post('/AngularWebShop/rest/shop/deleteShop/'+bla);
                   
                },
                getShopByName: function(shop){
                	return $http.get('/AngularWebShop/rest/shop/getShopByName/'+shop)
                }
            }




        }]);

})();