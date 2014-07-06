'use strict';

/* Controllers */
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
vanavaniControllers.controller('trusteesCtrl', ['$scope',
                                            function($scope) {
                                            }]);
vanavaniControllers.controller('newsLetterCtrl', ['$scope',
                                            function($scope) {
                                            }]);
vanavaniControllers.controller('studentParticularsCtrl', ['$scope',
                                            function($scope) {
                                            }]);
vanavaniControllers.controller('feeStructureCtrl', ['$scope',
                                            function($scope) {
                                            }]);
vanavaniControllers.controller('feeConcessionDetailsCtrl', ['$scope',
                                            function($scope) {
                                            }]);
vanavaniControllers.controller('goalsCtrl', ['$scope',
                                            function($scope) {
                                            }]);
vanavaniControllers.controller('howToSponsorCtrl', ['$scope',
                                            function($scope) {
                                            }]);
vanavaniControllers.controller('thankYouCtrl', ['$scope',
                                            function($scope) {
                                            }]);
