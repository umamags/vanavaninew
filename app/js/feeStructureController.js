'use strict';

/* Controllers */
var vanavaniControllers = angular.module('vanavaniControllers');

vanavaniControllers.controller('feeStructureCtrl', 
        function($scope, $location, $http) {
			$scope.data = [[[0, 1], [1, 5], [2, 2]]];
        });


vanavaniControllers.directive('vanavaniFeeStructure', function() {
	return {
		controller : function($scope) {
			console.log("1");			
		},
		link : function(scope, element, attrs) {
			var data = scope[attrs.ngModel];
            $.plot(element, data, {});
            element.show();		}
	};
});
