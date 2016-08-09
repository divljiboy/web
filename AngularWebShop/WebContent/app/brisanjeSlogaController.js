(function (angular) {
 
    angular.module("webShop").controller("brisanjeSlogaController", ['$scope','$state','productsService',function ($scope,$state,productsService) {
       
       
       
        $scope.potvrdaBrisanja = function () {
            var bla=$scope.selektovaniSlog.sifra;
            console.log("Brisemo slog" + $scope.selektovaniSlog.sifra);
           $scope.service.deleteSlog(bla,
           function (res) {
                alert("Uspesno obrisan sloga iz tabele ");
               
               $state.go('home');
             
               
               
           },
           function (res) {
               alert("Neuspesno brisanje iz tabele ");
               
               $state.go('home');
           });
 
 
        }
 
 
    }]);
 
 
})(angular);