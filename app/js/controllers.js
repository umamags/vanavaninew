'use strict';

/* Controllers */
var vanavaniControllers = angular.module('vanavaniControllers', []);

vanavaniControllers.controller('teachersListCtrl', ['$scope', 'Teacher',
  function($scope, Teacher) {
    $scope.teachers = Teacher.query();
    $scope.orderProp = 'sno';
  }]);


vanavaniControllers.controller('photoShowAllCtrl', ['$scope', '$routeParams', 'Photo',
     function($scope, $routeParams, Photo) {
       $scope.photos = Photo.query({folderName: $routeParams.folderName}, function(photo) {
       });
     }]);

vanavaniControllers.controller('photoDetailCtrl', ['$scope', '$routeParams',
       function($scope, $routeParams) {
		  var name = $routeParams.imageName;
	      name = name.replace("_medium.jpg", "");
		  name = name.replace("_medium.JPG", "");	    
	
		  $scope.folderName = $routeParams.folderName;
		  $scope.imageName = name;
       }]);

vanavaniControllers.controller('mentorsCtrl', ['$scope', '$routeParams',
       function($scope, $routeParams) {
       }]);

vanavaniControllers.controller('aboutTheSchoolCtrl', ['$scope', '$routeParams',
                                               function($scope, $routeParams) {
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
vanavaniControllers.controller('goalsCtrl', ['$scope',
                                            function($scope) {
                                            }]);
vanavaniControllers.controller('howToSponsorCtrl', ['$scope',
                                            function($scope) {
                                            }]);
vanavaniControllers.controller('thankYouCtrl', ['$scope',
                                            function($scope) {
                                            }]);
