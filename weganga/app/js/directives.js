'use strict'

angular.module('weganga.directives',[]);

angular.module('weganga.directives').directive('appVersion',['version',function(version){
	return {
		restrict: 'AE',
		link: function(scope,elem,attrs){
			elem.html(version);
		}
	}	
}]);
