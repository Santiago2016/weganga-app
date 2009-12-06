'use strict'

angular.module('weganga.user.controllers', []).controller('UserController', ['$scope', '$cookieStore', '$http', '$state', 'authService', function ($scope, $cookieStore, $http, $state, authService) {

    $scope.posts = [{'name': 'alejandro', 'lastname': 'fernandez'}, {'name': 'jesus', 'lastname': 'roig'}];
    if ($cookieStore.get('user') != null) {
        $scope.logueado = true;
    } else {
        $scope.logueado = false;
    }

    if ($cookieStore.get('user') != null && $cookieStore.get('user').role != 'ROLE_CLIENTE') {
        $scope.nouser = true;
    } else {
        $scope.nouser = false;
    }

    $scope.salir = function () {
        // $http.post('http://localhost/Weganga/web/app_dev.php/api/logout').then(function (data) {
        //     $cookieStore.remove('user');
        //     $state.go('login');
        // });

        authService.logout().then(function () {
            $state.go('login');
        })
    }

}]).controller('ListOfertaController', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/offers').then(function (response) {
        var resp = response.data;
        $scope.ofertas = resp.offers;
    }, function (err) {
        $scope.err = err;
    });

    $scope.buscar = function () {
        if ($scope.valor != '') {
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/offers/users/filter/' + $scope.valor).then(function (response) {
                var resp = response.data;
                $scope.ofertas = resp.offers;
            }, function (err) {
                $scope.err = err;
            });
        }else{
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/offers').then(function (response) {
                var resp = response.data;
                $scope.ofertas = resp.offers;
            }, function (err) {
                $scope.err = err;
            });
        }
    }
}]).controller('AboutController', ['$scope', function ($scope) {

}]).controller('OfertaverController', ['$scope', '$cookieStore', '$stateParams', '$http', '$state', function ($scope, $cookieStore,$stateParams, $http, $state) {
    if ($cookieStore.get('user') != null && $cookieStore.get('user').role == 'ROLE_CLIENTE') {
        $scope.isuser = true;
    } else {
        $scope.isuser = false;
    }
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/offers/' + $stateParams.id).then(function (response) {
        $scope.resp = response.data;
    }, function (err) {
        $scope.err = err;
    });

    $scope.apuntarse = function () {
        $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/user/apuntarse',{client:$cookieStore.get('user').username,oferta:$stateParams.id}).then(function(response,status){
            $state.go('user.ofertas');
        });
    }

    $scope.desear = function () {
        $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/user/desear',{client:$cookieStore.get('user').username,oferta:$stateParams.id}).then(function(response,status){
            $state.go('user.ofertas');
        });
    }
}]).controller('ContactController', ['$scope', function ($scope) {

}]).controller('FaqsController', ['$scope', function ($scope) {

}]).controller('PedidosController', ['$scope', '$http',function ($scope, $http) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/requests').then(function (response) {
        var resp = response.data;
        $scope.requests = resp.requests;
    }, function (err) {
        $scope.err = err;
    });
}]).controller('WishlistController', ['$scope', function ($scope) {

}]).controller('InviteController', ['$scope', function ($scope) {

}]);
