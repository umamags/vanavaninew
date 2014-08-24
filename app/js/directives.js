'use strict';
var vanavaniControllers = angular.module('vanavaniControllers');
/* Directives */
vanavaniControllers.directive('modalDialog', function() {
	return {
	    restrict: 'E',
	    scope: {
	      show: '='
	    },
	    replace: true, // Replace with the template below
	    templateUrl : 'partials/modalDialog.html',
	    transclude: true, // we want to insert custom content inside the directive
	    link: function(scope, element, attrs) {
	      scope.dialogStyle = {};
	      if (attrs.width)
	        scope.dialogStyle.width = attrs.width;
	      if (attrs.height)
	        scope.dialogStyle.height = attrs.height;
	      scope.hideModal = function() {
	        scope.show = false;
	      };
	    }
	  };
	});

vanavaniControllers.directive('checkUser', ['$rootScope', '$location', 'userSrv', function ($root, $location, userSrv) {
	return {
		link: function (scope, elem, attrs, ctrl) {
			$root.$on('$routeChangeStart', function(event, currRoute, prevRoute){
				if (!prevRoute.access.isFree && !userSrv.isLogged) {
					// reload the login route
				}
			});
		}
	}
}]);