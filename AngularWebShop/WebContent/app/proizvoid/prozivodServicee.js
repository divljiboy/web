(function () {

    angular.module('webShop')
        .service('prozivodService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function (onSuccess, onError) {
                    
                   $http.get('/AngularWebShop/rest/proizvodi/getJustProducts');
                },
                put: function (banka, onSucces, onError)
                    {
                
                },
                    post: function (product, onSuccess, onError) {
                    	$http.post('/AngularWebShop/rest/proizvodi/add', {"id":''+product.id, "count":parseInt(product.count)});
                    	
                }/*,
                    deleteSlog: function (banka, onSuccess, onError) {
                        var req = {
                            method: 'DELETE',
                            url: 'api/banka/' + banka.Id,
                            
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        };
                        $http(req).then(onSuccess, onError);

                    }*/
            }




        }]);

})();