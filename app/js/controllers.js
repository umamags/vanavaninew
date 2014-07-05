'use strict';

/* Controllers */
console.log("Mahesh in controllers.js 1");
var vanavaniControllers = angular.module('vanavaniControllers', []);

vanavaniControllers.controller('teachersListCtrl', ['$scope', 'Teacher',
  function($scope, Teacher) {
    $scope.teachers = Teacher.query();
    $scope.orderProp = 'sno';
  }]);

vanavaniControllers.controller('homeCtrl', ['$scope',
                                                    function($scope) {
                                                    }]);

vanavaniControllers.controller('ptaCtrl', ['$scope',
                                            function($scope) {
                                            }]);

vanavaniControllers.controller('photoGalleryCtrl', ['$scope',
                                            function($scope) {
                                            }]);

vanavaniControllers.controller('videoGalleryCtrl', ['$scope',
                                            function($scope) {
                                            }]);

vanavaniControllers.controller('showCaseCtrl', ['$scope',
                                            function($scope) {
                                            }]);

vanavaniControllers.controller('contactUsCtrl', ['$scope',
                                            function($scope) {
                                            }]);

vanavaniControllers.controller('jobsCtrl', ['$scope',
                                            function($scope) {
                                            }]);
