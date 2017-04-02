'use strict'

angular.module('weganga.admin.directives', []).directive('onClickMakeActive', function() {
	return {
		restrict: 'AEC',
		link: function(scope, elem, attrs) {
			elem.find('li').bind('click', function(event) {
				angular.element(event.currentTarget).parent().find('li').removeClass('active');
				angular.element(event.currentTarget).addClass('active');
			});
		}
	}
}).directive('fileUpload', function() {
	return {
		scope: true,
		link: function (scope, el, attrs){
			el.bind('change', function (event) {
				var files = event.target.files;
				for (var i = 0;i<files.length;i++) {
					//emit event upward
					scope.$emit("fileSelected", { file: files[i] });
				}
			});
		}
	};
});