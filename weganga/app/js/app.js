'use strict'

angular.module('weganga', ['ngCookies', 'ngSanitize','naif.base64', 'ngResource', 'angular-loading-bar','ngAnimate', 'ui.router', 'ui.bootstrap', 'pascalprecht.translate', 'weganga.admin', 'weganga.user', 'weganga.controllers', 'weganga.directives', 'weganga.filters', 'weganga.services']);

angular.module('weganga').config(['$translateProvider', '$httpProvider', function ($translateProvider, $httpProvider) {
  	

    $translateProvider.useStaticFilesLoader({
	    prefix: 'locales/locale-',
	    suffix: '.json'
	});
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escapeParameters');
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
    };
}]);
