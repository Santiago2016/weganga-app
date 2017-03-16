'use strict'

angular.module('weganga.admin', ['weganga.admin.controllers', 'weganga.admin.directives', 'weganga.admin.services', 'weganga.admin.filters']);

angular.module('weganga.admin').config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            controller: 'LoginController',
            resolve: {
                user: ['authService', '$q', function (authService, $q) {
                        if (authService.user) {
                            return $q.reject({authorized: true});
                        }
                    }]
            },
            templateUrl: 'modules/admin/views/login.html'
        }).state('admin', {
            url: '/admin',
            abstract: true,
            controller: 'AdminController',
            resolve: {
                 user: ['authService', '$q', function (authService, $q) {
                         return (authService.user.role == 'ROLE_ADMIN') || $q.reject({unAuthorized: true});
                     }]
            },
            templateUrl: 'modules/admin/views/admin-home.html'
        }).state('vendedor', {
            url: '/vendedor',
            abstract: true,
            controller: 'VendedorController',
            resolve: {
                user: ['authService', '$q', function (authService, $q) {
                    return (authService.user.role == 'ROLE_VENDEDOR') || $q.reject({unAuthorized: true});
                }]
            },
            templateUrl: 'modules/admin/views/vendedor-home.html'
        }).state('admin.crearproveedor', {
            url: '/proveedor/crear',
            controller: 'AdminCrearProveedorController',
            templateUrl: 'modules/admin/views/proveedor/admin-new-proveedor.html'
        }).state('admin.editarproveedor', {
            url: '/proveedor/:id/editar',
            controller: 'AdminEditarProveedorController',
            templateUrl: 'modules/admin/views/proveedor/admin-update-proveedor.html'
        }).state('admin.proveedores', {
            url: '/proveedor/viewall',
            controller: 'AdminProveedorListController',
            templateUrl: 'modules/admin/views/proveedor/admin-all-proveedor.html'
        }).state('admin.crearimpuesto', {
            url: '/impuesto/crear',
            controller: 'AdminCrearImpuestoController',
            templateUrl: 'modules/admin/views/impuesto/admin-new-impuesto.html'
        }).state('admin.editarimpuesto', {
            url: '/impuesto/:id/editar',
            controller: 'AdminEditarImpuestoController',
            templateUrl: 'modules/admin/views/impuesto/admin-update-impuesto.html'
        }).state('admin.impuestos', {
            url: '/impuesto/viewall',
            controller: 'AdminImpuestoListController',
            templateUrl: 'modules/admin/views/impuesto/admin-all-impuesto.html'
        }).state('admin.crearoferta', {
            url: '/oferta/crear',
            controller: 'AdminCrearOfertaController',
            templateUrl: 'modules/admin/views/oferta/admin-new-oferta.html'
        }).state('admin.editaroferta', {
            url: '/oferta/:id/editar',
            controller: 'AdminEditarOfertaController',
            templateUrl: 'modules/admin/views/oferta/admin-update-oferta.html'
        }).state('admin.ofertas', {
            url: '/oferta/viewall',
            controller: 'AdminOfertaListController',
            templateUrl: 'modules/admin/views/oferta/admin-all-oferta.html'
        }).state('admin.crearreglacarrito', {
            url: '/reglacarrito/crear',
            controller: 'AdminCrearReglaCarritoController',
            templateUrl: 'modules/admin/views/reglacarrito/admin-new-reglacarrito.html'
        }).state('admin.editarreglacarrito', {
            url: '/reglacarrito/:id/editar',
            controller: 'AdminEditarReglaCarritoController',
            templateUrl: 'modules/admin/views/reglacarrito/admin-update-reglacarrito.html'
        }).state('admin.reglacarritos', {
            url: '/reglacarrito/viewall',
            controller: 'AdminReglaCarritoListController',
            templateUrl: 'modules/admin/views/reglacarrito/admin-all-reglacarrito.html'
        }).state('admin.crearreglapromocion', {
            url: '/reglapromocion/crear',
            controller: 'AdminCrearReglaPromocionController',
            templateUrl: 'modules/admin/views/reglapromocion/admin-new-reglapromocion.html'
        }).state('admin.editarreglapromocion', {
            url: '/reglapromocion/:id/editar',
            controller: 'AdminEditarReglaPromocionController',
            templateUrl: 'modules/admin/views/reglapromocion/admin-update-reglapromocion.html'
        }).state('admin.reglapromociones', {
            url: '/reglapromocion/viewall',
            controller: 'AdminReglaPromocionListController',
            templateUrl: 'modules/admin/views/reglapromocion/admin-all-reglapromocion.html'
        }).state('admin.crearventa', {
            url: '/venta/crear',
            controller: 'AdminCrearVentaController',
            templateUrl: 'modules/admin/views/venta/admin-new-venta.html'
        }).state('admin.editarventa', {
            url: '/venta/:id/editar',
            controller: 'AdminEditarVentaController',
            templateUrl: 'modules/admin/views/venta/admin-update-venta.html'
        }).state('admin.ventas', {
            url: '/venta/viewall',
            controller: 'AdminVentaListController',
            templateUrl: 'modules/admin/views/venta/admin-all-venta.html'
        }).state('admin.crearusuario', {
            url: '/usuario/crear',
            controller: 'AdminCrearUsuarioController',
            templateUrl: 'modules/admin/views/usuario/admin-new-usuario.html'
        }).state('admin.editarusuario', {
            url: '/usuario/:id/editar',
            controller: 'AdminEditarUsuarioController',
            templateUrl: 'modules/admin/views/usuario/admin-update-usuario.html'
        }).state('admin.usuarios', {
            url: '/usuario/listar',
            controller: 'AdminUsuarioListController',
            templateUrl: 'modules/admin/views/usuario/admin-all-usuario.html'
        }).state('admin.crearcategoria', {
            url: '/categoria/crear',
            controller: 'AdminCrearCategoriaController',
            templateUrl: 'modules/admin/views/categoria/admin-new-categoria.html'
        }).state('admin.editarcategoria', {
            url: '/categoria/editar/:id',
            controller: 'AdminEditarCategoriaController',
            templateUrl: 'modules/admin/views/categoria/admin-update-categoria.html'
        }).state('admin.categorias', {
            url: '/categoria/listar',
            controller: 'AdminCategoriaListController',
            templateUrl: 'modules/admin/views/categoria/admin-all-categoria.html'
        }).state('admin.informe', {
            url: '/informe',
            controller: 'AdminInformeController',
            templateUrl: 'modules/admin/views/informe/informe-admin.html'
        }).state('registrarse', {
            url: '/registrarse',
            controller: 'RegistrarseController',
            templateUrl: 'modules/admin/views/registrarse.html'
        }).state('forgotpassword', {
            url: '/forgotpassword',
            controller: 'ForgotPasswordController',
            templateUrl: 'modules/admin/views/forgot-password.html'
        }).state('vendedor.crearoferta', {
            url: '/ofertas/crear',
            controller: 'VendedorCrearOfertaController',
            templateUrl: 'modules/admin/views/vendedorofertas/vendedor-new-oferta.html'
        }).state('vendedor.editaroferta', {
            url: '/ofertas/:id/editar',
            controller: 'VendedorEditarOfertaController',
            templateUrl: 'modules/admin/views/vendedorofertas/vendedor-edit-oferta.html'
        }).state('vendedor.ofertas', {
            url: '/ofertas/viewall',
            controller: 'VendedorListOfertaController',
            templateUrl: 'modules/admin/views/vendedorofertas/vendedor-list-oferta.html'
        }).state('vendedor.crearcategoria', {
            url: '/categorias/crear',
            controller: 'VendedorCrearCategoriaController',
            templateUrl: 'modules/admin/views/vendedorcategorias/vendedor-new-categoria.html'
        }).state('vendedor.editarcategoria', {
            url: '/categorias/:id/editar',
            controller: 'VendedorEditarCategoriaController',
            templateUrl: 'modules/admin/views/vendedorcategorias/vendedor-edit-categoria.html'
        }).state('vendedor.categorias', {
            url: '/categorias/viewall',
            controller: 'VendedorListCategoriaController',
            templateUrl: 'modules/admin/views/vendedorcategorias/vendedor-list-categoria.html'
        }).state('vendedor.pedidos', {
            url: '/pedidos/viewall',
            controller: 'VendedorListPedidosController',
            templateUrl: 'modules/admin/views/vendedorpedidos/vendedor-list-pedidos.html'
        }).state('vendedor.cargamasiva', {
            url: '/cargamasiva',
            controller: 'VendedorCargaMasivaController',
            templateUrl: 'modules/admin/views/vendedorcargamasiva/carga-masiva.html'
        }).state('vendedor.informe', {
            url: '/informe',
            controller: 'VendedorInformeController',
            templateUrl: 'modules/admin/views/informe/informe-vendedor.html'
        });
    }]).run(['$rootScope', '$state', '$cookieStore', 'authService', function ($rootScope, $state, $cookieStore, authService) {

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

            if (error.unAuthorized) {
                $state.go('login');
            } else if (error.authorized) {
                if ($cookieStore.get('user').role == 'ROLE_ADMIN') {
                    $state.go('admin.usuarios');
                }else if ($cookieStore.get('user').role == 'ROLE_VENDEDOR'){
                    $state.go('vendedor.ofertas');
                }else{
                    $state.go('user.ofertas')
                }
            }
        });

        authService.user = $cookieStore.get('user');

    }]);
