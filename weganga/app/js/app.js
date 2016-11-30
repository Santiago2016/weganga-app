'use strict'

angular.module('weganga', ['ngCookies', 'ngSanitize', 'ngResource', 'ngAnimate', 'ui.router', 'pascalprecht.translate', 'weganga.admin', 'weganga.user', 'weganga.controllers', 'weganga.directives', 'weganga.filters', 'weganga.services']);

angular.module('weganga').config(['$translateProvider', '$httpProvider', function ($translateProvider, $httpProvider) {
    $translateProvider.translations('en', {
        TITLE: 'The Online Shop',
        SUBTITLE: 'A place to buy and shop',
        COMMENTS: 'Comments',
        BY: 'By',
        ADD: 'Add'
    });

    $translateProvider.translations('es', {
        TITLE: 'la tienda online',
        SUBTITLE: 'Un lugar para vender y comprar',
        COMMENTS: 'Comentarios',
        BY: 'Por',
        ADD: 'Agregar'
    });

    $translateProvider.preferredLanguage('en');

    $httpProvider.defaults.withCredentials = false;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.delete = {};
    $httpProvider.defaults.headers.put = {};

}]);

angular.module('weganga').run(['$state', '$rootScope', '$translate', function ($state, $rootScope, $translate) {

    $state.go('user.ofertas');

    $rootScope.languagePreference = {currentLanguage: 'en'};

    $rootScope.languagePreference.switchLanguage = function (key) {
        $translate.use(key);
        $rootScope.languagePreference.currentLanguage = key;
    }
}]);
