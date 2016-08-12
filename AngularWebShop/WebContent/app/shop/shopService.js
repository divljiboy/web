(function () {

    angular.module('webShop')
        .service('shopService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function () {
                    
                  return $http.get('/AngularWebShop/rest/shop/get')
                  
                },
                put: function (shop)
                    {
                	console.log('put put')
                  return $http.put('/AngularWebShop/rest/shop/edit', shop)
                
                },
                post: function (shop) {
                    	$http.post('/AngularWebShop/rest/shop/add', shop)
                    	
                },
                deleteSlog : function(bla)
                {
                
                  return  $http.post('/AngularWebShop/rest/shop/delete/'+bla);
                   
                }
            }




        }]);

})();