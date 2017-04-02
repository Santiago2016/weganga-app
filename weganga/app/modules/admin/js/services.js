'use strict'

angular.module('weganga.admin.services', []).factory('Post',['$resource','API_ENDPOINT',function($resource,API_ENDPOINT){
    return $resource(API_ENDPOINT, { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
}]).factory('Proveedor',['$resource','API_PROVEEDORESENDPOINT',function($resource,API_PROVEEDORESENDPOINT){
	return $resource(API_PROVEEDORESENDPOINT, { id: '@_id'}, {
		update: {
			method: 'PUT'
		}
	});
}]).factory('Oferta',['$resource','API_OFERTASENDPOINT',function($resource,API_OFERTASENDPOINT){
	return $resource(API_OFERTASENDPOINT, { id: '@_id'}, {
		update: {
			method: 'PUT'
		}
	});
}]).factory('Ventas',['$resource','API_VENTASENDPOINT',function($resource,API_VENTASENDPOINT){
	return $resource(API_VENTASENDPOINT, { id: '@_id'}, {
		update: {
			method: 'PUT'
		}
	});
}]).factory('Impuestos',['$resource','API_IMPUESTOSENDPOINT',function($resource,API_IMPUESTOSENDPOINT){
	return $resource(API_IMPUESTOSENDPOINT, { id: '@_id'}, {
		update: {
			method: 'PUT'
		}
	});
}]).factory('Carrito',['$resource','API_CARRITOENDPOINT',function($resource,API_CARRITOENDPOINT){
	return $resource(API_CARRITOENDPOINT, { id: '@_id'}, {
		update: {
			method: 'PUT'
		}
	});
}]).factory('Promocion',['$resource','API_PROMOCIONENDPOINT',function($resource,API_PROMOCIONENDPOINT){
	return $resource(API_PROMOCIONENDPOINT, { id: '@_id'}, {
		update: {
			method: 'PUT'
		}
	});
}]).factory('Grupos',['$resource','API_GRUPOSENDPOINT',function($resource,API_GRUPOSENDPOINT){
	return $resource(API_GRUPOSENDPOINT, { id: '@_id'}, {
		update: {
			method: 'PUT'
		}
	});
}]).service('popupService',['$window',function($window){
    this.showPopup=function(message){
        return $window.confirm(message); //Ask the users if they really want to delete the post entry
    }
}]).factory('authService',['AUTH_ENDPOINT','LOGOUT_ENDPOINT','$http','$cookieStore',function(AUTH_ENDPOINT,LOGOUT_ENDPOINT,$http,$cookieStore){

    var auth={};

    auth.login=function(username,password){
        return $http.post(AUTH_ENDPOINT,{username:username,password:password}).then(function(response,status){
            var data = response.data;
            auth.user= data.user;
            if (auth.user != null){
                $cookieStore.put('user',auth.user);
                return auth.user;
            }
            return null;
        });
    }

    auth.logout=function(){
        return $http.post(LOGOUT_ENDPOINT).then(function(response){
            auth.user=undefined;
            $cookieStore.remove('user');
        });
    }

    return auth;

}]).factory('informes',['API_INFORMEVENTASENDPOINT','API_INFORMECLIENTESENDPOINT','$http',function(API_INFORMEVENTASENDPOINT,API_INFORMECLIENTESENDPOINT,$http){

    var informe={};

    informe.ventas=function(){
        return $http.post(API_INFORMEVENTASENDPOINT).then(function(response,status){
            return response.data;
        });
    }

    informe.clientes=function(){
        return $http.post(API_INFORMECLIENTESENDPOINT).then(function(response){
            return response.data;
        });
    }

    return informe;

}]);

var host = "http://localhost";

angular.module('weganga.admin.services').value('API_PROVEEDORESENDPOINT',host + '/Weganga/web/app_dev.php/api/proveedores/:id');
angular.module('weganga.admin.services').value('API_OFERTASENDPOINT',host + '/Weganga/web/app_dev.php/api/ofertas/:id');
angular.module('weganga.admin.services').value('API_VENTASENDPOINT',host + '/Weganga/web/app_dev.php/api/ventas/:id');
angular.module('weganga.admin.services').value('API_IMPUESTOSENDPOINT',host + '/Weganga/web/app_dev.php/api/impuestos/:id');
angular.module('weganga.admin.services').value('API_CARRITOENDPOINT',host + '/Weganga/web/app_dev.php/api/carrito/:id');
angular.module('weganga.admin.services').value('API_PROMOCIONENDPOINT',host + '/Weganga/web/app_dev.php/api/promocion/:id');
angular.module('weganga.admin.services').value('API_GRUPOSENDPOINT',host + '/Weganga/web/app_dev.php/api/grupos/:id');
angular.module('weganga.admin.services').value('API_INFORMEVENTASENDPOINT',host + '/Weganga/web/app_dev.php/api/informes/ventasadmin');
angular.module('weganga.admin.services').value('API_INFORMECLIENTESENDPOINT',host + '/Weganga/web/app_dev.php/api/informes/clientesadmin');
angular.module('weganga.admin.services').value('AUTH_ENDPOINT',host + '/Weganga/web/app_dev.php/api/login');
angular.module('weganga.admin.services').value('LOGOUT_ENDPOINT',host + '/Weganga/web/app_dev.php/api/logout');

/**
 * Uncomment the following and comment the above three value services to use local endpoints.Make sure the local server
 * has started.
 *
 * See chapter 13, last section for more information on this.
 */

//angular.module('spBlogger.admin.services').value('API_ENDPOINT','http://localhost:8080/api/posts/:id');
//angular.module('spBlogger.admin.services').value('AUTH_ENDPOINT','http://localhost:8080/login');
//angular.module('spBlogger.admin.services').value('LOGOUT_ENDPOINT','http://localhost:8080/logout');
