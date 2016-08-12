(function () {

    angular.module('webShop')
        .service('shopService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function (onSuccess, onError) {
                    
                  return $http.get('/AngularWebShop/rest/shop/getJustShops')
                  
                },
                put: function (shop, onSucces, onError)
                    {
                	console.log('put put')
                  return $http.put('/AngularWebShop/rest/shop/editShop', shop)
                
                },
                post: function (shop, onSuccess, onError) {
                    	$http.post('/AngularWebShop/rest/shop/add', shop)
                    	
                }/*
                deleteSlog : function(bla,onSuccess,onError)
                {
                
                  return  $http.post('/AngularWebShop/rest/product/delete/'+bla);
                   
                }*/
            }




        }]);

})();