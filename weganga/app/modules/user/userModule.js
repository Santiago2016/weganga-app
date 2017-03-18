'use strict'

angular.module('weganga.user',['weganga.user.controllers','weganga.user.directives','weganga.user.services','weganga.user.filters']);

angular.module('weganga.user').config(['$stateProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('user',{
		url:'/users',
		templateUrl: 'modules/user/views/layout.html',
		controller: 'UserController'
	}).state('user.ofertas', {
		url: '/ofertas/viewall',
		controller: 'ListOfertaController',
		templateUrl: 'modules/user/views/ofertas.html'
	}).state('user.ofertasdia', {
		url: '/ofertas/dia/viewall',
		controller: 'ListOfertaDiaController',
		templateUrl: 'modules/user/views/ofertas-dia.html'
	}).state('user.ofertaselectrodomesticos', {
		url: '/ofertas/electrodomesticos/viewall',
		controller: 'ListOfertaElectrodomesticosController',
		templateUrl: 'modules/user/views/ofertas-electrodomesticos.html'
	}).state('user.ofertaselectronica', {
		url: '/ofertas/electronica/viewall',
		controller: 'ListOfertaElectronicaController',
		templateUrl: 'modules/user/views/ofertas-electronica.html'
	}).state('user.ofertashogar', {
		url: '/ofertas/hogar/viewall',
		controller: 'ListOfertaHogarController',
		templateUrl: 'modules/user/views/ofertas-hogar.html'
	}).state('user.ofertasaccesorios', {
		url: '/ofertas/accesorios/viewall',
		controller: 'ListOfertaAccesoriosController',
		templateUrl: 'modules/user/views/ofertas-accesorios.html'
	}).state('user.ofertasexterior', {
		url: '/ofertas/exterior/viewall',
		controller: 'ListOfertaExteriorController',
		templateUrl: 'modules/user/views/ofertas-exterior.html'
	}).state('user.ofertaver', {
		url: '/ofertas/:id/ver',
		controller: 'OfertaverController',
		templateUrl: 'modules/user/views/oferta-single.html'
	}).state('user.proveedorofertas', {
		url: '/proveedor/:id/ofertas',
		controller: 'ProveedorOfertasController',
		templateUrl: 'modules/user/views/proveedor-ofertas.html'
	}).state('user.categoriaofertas', {
		url: '/categoria/:name/ofertas',
		controller: 'CategoriaOfertasController',
		templateUrl: 'modules/user/views/categoria-ofertas.html'
	}).state('user.about', {
		url: '/about',
		controller: 'AboutController',
		templateUrl: 'modules/user/views/about.html'
	}).state('user.contact', {
		url: '/contact',
		controller: 'ContactController',
		templateUrl: 'modules/user/views/contact.html'
	}).state('user.faqs', {
		url: '/faqs',
		controller: 'FaqsController',
		templateUrl: 'modules/user/views/faqs.html'
	}).state('user.pedidos', {
		url: '/pedidos',
		controller: 'PedidosController',
		templateUrl: 'modules/user/views/pedidos.html'
	}).state('user.wishlist', {
		url: '/wishlist',
		controller: 'WishListController',
		templateUrl: 'modules/user/views/wishlist.html'
	}).state('user.invite', {
		url: '/invite',
		controller: 'InviteController',
		templateUrl: 'modules/user/views/invite.html'
	});
}]);
