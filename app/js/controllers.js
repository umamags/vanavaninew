'use strict';

/* Controllers */
var vanavaniControllers = angular.module('vanavaniControllers', ['vanavaniServices']);

vanavaniControllers.controller('teachersListCtrl', [ '$scope', 'Teacher',
		function($scope, Teacher) {
			$scope.teachers = Teacher.query();
			$scope.orderProp = 'sno';
			
			$scope.modalShown = false;
			$scope.toggleModal = function(imageName) {
				var name = imageName;
				name = name.replace("_medium.jpg", "");
				name = name.replace("_medium.JPG", "");
			    $scope.modalDialogImage = name;
				
			    $scope.modalShown = !$scope.modalShown;
			};
		} ]);

vanavaniControllers.controller('photoShowAllCtrl', [ '$scope', '$routeParams',
		'Photo', function($scope, $routeParams, Photo) {
			$scope.photos = Photo.query({
				folderName : $routeParams.folderName
			}, function(photo) {
			});
		} ]);

vanavaniControllers.controller('photoDetailCtrl', [ '$scope', '$routeParams',
		function($scope, $routeParams) {
			var name = $routeParams.imageName;
			name = name.replace("_medium.jpg", "");
			name = name.replace("_medium.JPG", "");

			$scope.folderName = $routeParams.folderName;
			$scope.imageName = name;
		} ]);

vanavaniControllers.factory('ReadCookie', function() {
	return {
		// returns itemId
		read : function(cookieName) {
			var cookies = {};
		    var c = document.cookie.split('; ');

		    for(var i=c.length-1; i>=0; i--){
		       var C = c[i].split('=');
		       cookies[C[0]] = C[1];
		    }

		    return cookies[name];
		}
	};
});

vanavaniControllers.controller('loginCtrl', [ '$scope', '$http', 'UserService', 'ReadCookie',
		function($scope, $http, User, ReadCookie) {
			$scope.User = User;
			readCookie($scope);
			
			function readCookie($scope) {
				var url = "php/ReadCookie.php?action=read";
                $http.get(url).success(function (response) {		
                    User.password = "";
                    User.isLogged = response[0].loggedin;
                    User.username = response[0].username;
                    $scope.User = User;
                });            								
			}
			
			$scope.login = function() {
				var url = "php/LoginService.php?username=" + $scope.User.username + "&password=" + $scope.User.password;
                $http.get(url).success(function (response) {		
                    User.password = "";
                    User.isLogged = response[0].loggedin;
                    if (User.isLogged == "true") {
        				User.username = $scope.username;                    	
        				$("#adminMenu").show();
                    } else {
                    	User.error = response[0].error;
                    	console.log(User.error);
                    	$("#adminMenu").hide();
                    }
    				$scope.User = User;
                });            				
			}
			
			$scope.logout = function() {				
				var url = "php/ReadCookie.php?action=delete";
                $http.get(url).success(function (response) {		
                    User.password = "";
                    User.isLogged = response[0].loggedin;
                    User.username = response[0].username;
                    $scope.User = User;
                });            								
				User.isLogged = "false";
				User.username = "";
				User.password = "";
				$scope.User = User;
				$("#adminMenu").hide();
			}
			
		} ]);

vanavaniControllers.controller('photoTreeCtrl', [ '$scope', '$routeParams',
		function($scope, $routeParams) {
		} ]);

vanavaniControllers.controller('mentorsCtrl', [ '$scope', '$routeParams',
		function($scope, $routeParams) {
		} ]);

vanavaniControllers.controller('aboutTheSchoolCtrl', [ '$scope',
		'$routeParams', function($scope, $routeParams) {
		} ]);

vanavaniControllers.controller('homeCtrl', [ '$scope', function($scope) {
	$scope.$on('$viewContentLoaded', function() {
		window.scrollTo(0, 0);		
		$("#circle0").addClass("circleActive");
		$("#circle1").addClass("circleActive");
		$("#circle2").addClass("circleActive");
		$("#circle3").addClass("circleActive");
		$("#circle4").addClass("circleActive");
		$("#circle5").addClass("circleActive");				
	});
} ]);

vanavaniControllers.controller('ptaCtrl', [ '$scope', function($scope) {
} ]);

vanavaniControllers.controller('photoGalleryCtrl', [ '$scope',
		function($scope) {
		} ]);

vanavaniControllers.controller('videoGalleryCtrl', [ '$scope',
		function($scope) {
		} ]);

vanavaniControllers.controller('showCaseCtrl', [ '$scope', function($scope) {
} ]);

vanavaniControllers.controller('contactUsCtrl', [ '$scope', function($scope) {
} ]);

vanavaniControllers.controller('jobsCtrl', [ '$scope', function($scope) {
} ]);
vanavaniControllers.controller('trusteesCtrl', [ '$scope', function($scope) {
} ]);
vanavaniControllers.controller('newsLetterCtrl', [ '$scope', function($scope) {
} ]);
vanavaniControllers.controller('studentParticularsCtrl', [ '$scope',
		function($scope) {
		} ]);
vanavaniControllers.controller('goalsCtrl', [ '$scope', function($scope) {
} ]);
vanavaniControllers.controller('howToSponsorCtrl', [ '$scope',
		function($scope) {
		} ]);
vanavaniControllers.controller('thankYouCtrl', [ '$scope', function($scope) {
} ]);
