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
	}).state('user.ofertaver', {
		url: '/ofertas/:id/ver',
		controller: 'OfertaverController',
		templateUrl: 'modules/user/views/oferta-single.html'
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
