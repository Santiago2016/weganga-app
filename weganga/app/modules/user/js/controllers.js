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
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/offers/user').then(function (response) {
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
            $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/offers/users').then(function (response) {
                var resp = response.data;
                $scope.ofertas = resp.offers;
            }, function (err) {
                $scope.err = err;
            });
        }
    }
}]).controller('ListOfertaDiaController', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://localhost:8080/Weganga/web/app_dev.php/api/offers/dia').then(function (response) {
        var resp = response.data;
        $scope.ofertas = resp.offers;
    }, function (err) {
        $scope.err = err;
    });
}]).controller('ListOfertaElectrodomesticosController', ['$scope', '$http', function ($scope, $http) {
    $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/categoria/ofertas', {category:'Electrodomesticos'}).then(function(response){
        var resp = response.data;
        $scope.ofertas = resp.offers;
    }, function (err) {
        $scope.err = err;
    });
}]).controller('ListOfertaElectronicaController', ['$scope', '$http', function ($scope, $http) {
    $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/categoria/ofertas', {category:'Electronica'}).then(function(response){
        var resp = response.data;
        $scope.ofertas = resp.offers;
    }, function (err) {
        $scope.err = err;
    });
}]).controller('ListOfertaHogarController', ['$scope', '$http', function ($scope, $http) {
    $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/categoria/ofertas', {category:'Hogar, dulce hogar'}).then(function(response){
        var resp = response.data;
        $scope.ofertas = resp.offers;
    }, function (err) {
        $scope.err = err;
    });
}]).controller('ListOfertaAccesoriosController', ['$scope', '$http', function ($scope, $http) {
    $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/categoria/ofertas', {category:'Accesorios'}).then(function(response){
        var resp = response.data;
        $scope.ofertas = resp.offers;
    }, function (err) {
        $scope.err = err;
    });
}]).controller('ListOfertaExteriorController', ['$scope', '$http', function ($scope, $http) {
    $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/categoria/ofertas', {category:'Exterior'}).then(function(response){
        var resp = response.data;
        $scope.ofertas = resp.offers;
    }, function (err) {
        $scope.err = err;
    });
}]).controller('ProveedorOfertasController', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {
    $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/proveedor/offers',{oferta:$stateParams.id}).then(function (response) {
        var resp = response.data;
        $scope.ofertas = resp.offers;
    }, function (err) {
        $scope.err = err;
    });
}]).controller('CategoriaOfertasController', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {
    $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/categoria/ofertas', {category:$stateParams.name}).then(function(response){
        var resp = response.data;
        $scope.ofertas = resp.offers;
    }, function (err) {
        $scope.err = err;
    });
}]).controller('AboutController', ['$scope', function ($scope) {

}]).controller('OfertaverController', ['$scope', '$cookieStore', '$stateParams', '$http', '$state', function ($scope, $cookieStore,$stateParams, $http, $state) {
    if ($cookieStore.get('user') != null && $cookieStore.get('user').role == 'ROLE_CLIENTE') {
        $scope.isuser = true;
        $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/offers/single',{
            client:$cookieStore.get('user').id,
            offer:$stateParams.id}).then(function(response,status){
            $scope.resp = response.data;
        });
    } else {
        $scope.isuser = false;
        $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/offers/single',{
            client:'',
            offer:$stateParams.id}).then(function(response,status){
            $scope.resp = response.data;
        });
    }

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
}]).controller('WishListController', ['$scope', '$cookieStore','$http', '$state',function ($scope, $cookieStore,$http, $state) {
    $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/user/listadeseos',{client:$cookieStore.get('user').username}).then(function (response) {
        var resp = response.data;
        $scope.ofertas = resp.offers;
    }, function (err) {
        $scope.err = err;
    });

    $scope.apuntarse = function (id) {
        $http.post('http://localhost:8080/Weganga/web/app_dev.php/api/user/apuntarse',{client:$cookieStore.get('user').username,oferta:id}).then(function(response,status){
            $state.go('user.ofertas');
        });
    }
}]).controller('InviteController', ['$scope', function ($scope) {

}]);
