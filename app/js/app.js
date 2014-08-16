'use strict';
 
/* App Module */
var vanavaniApp = angular.module('vanavaniApp', [
  'ngRoute',
  'ngGrid',
  'vanavaniControllers',
  'vanavaniFilters',
  'vanavaniServices'
]);
vanavaniApp.config(['$routeProvider',
  function($routeProvider) {
	  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
	  $routeProvider.when('/pta', {templateUrl: 'partials/pta.html', controller: 'ptaCtrl'});
	  $routeProvider.when('/teachersList', {templateUrl: 'partials/teachersList.html', controller: 'teachersListCtrl'});
	  $routeProvider.when('/photoGallery', {templateUrl: 'partials/photoGallery.html', controller: 'photoGalleryCtrl'});
	  $routeProvider.when('/videoGallery', {templateUrl: 'partials/videoGallery.html', controller: 'videoGalleryCtrl'});
	  $routeProvider.when('/videoGallery/annualDay/2014', {templateUrl: 'partials/videoGalleryAnnualDay2014.html', controller: 'videoGalleryCtrl'});
	  $routeProvider.when('/videoGallery/childrensDay/2013', {templateUrl: 'partials/videoGalleryChildrensDay2013.html', controller: 'videoGalleryCtrl'});
	  $routeProvider.when('/showCase', {templateUrl: 'partials/showCase.html', controller: 'showCaseCtrl'});
	  $routeProvider.when('/contactUs', {templateUrl: 'partials/contactUs.html', controller: 'contactUsCtrl'});
	  $routeProvider.when('/jobs', {templateUrl: 'partials/jobs.html', controller: 'jobsCtrl'});
	  $routeProvider.when('/aboutTheSchool', {templateUrl: 'partials/aboutTheSchool.html', controller: 'aboutTheSchoolCtrl'});
	  $routeProvider.when('/trustees', {templateUrl: 'partials/trustees.html', controller: 'trusteesCtrl'});
	  $routeProvider.when('/newsLetter', {templateUrl: 'partials/newsLetter.html', controller: 'newsLetterCtrl'});
	  $routeProvider.when('/studentParticulars', {templateUrl: 'partials/studentParticulars.html', controller: 'studentParticularsCtrl'});
	  $routeProvider.when('/feeStructure', {templateUrl: 'partials/feeStructure.html', controller: 'feeStructureCtrl'});
	  $routeProvider.when('/feeConcessionDetails', {templateUrl: 'partials/feeConcessionDetails.html', controller: 'feeConcessionDetailsCtrl'});
	  $routeProvider.when('/feeConcessionDetails/1', {templateUrl: 'partials/feeConcessionDetails.html', controller: 'feeConcessionDetailsCtrl'});
	  $routeProvider.when('/feeConcessionDetails/2', {templateUrl: 'partials/feeConcessionDetails.html', controller: 'feeConcessionDetailsCtrl'});
	  $routeProvider.when('/goals', {templateUrl: 'partials/goals.html', controller: 'goalsCtrl'});
	  $routeProvider.when('/howToSponsor', {templateUrl: 'partials/howToSponsor.html', controller: 'howToSponsorCtrl'});
	  $routeProvider.when('/thankYou', {templateUrl: 'partials/thankYou.html', controller: 'thankYouCtrl'});
	  $routeProvider.when('/photoShowAll/:folderName', {templateUrl: 'partials/photoShowAll.html', controller: 'photoShowAllCtrl'});
	  $routeProvider.when('/photoDetail/images/:folderName/:imageName', {templateUrl: 'partials/photoDetail.html', controller: 'photoDetailCtrl'});
	  $routeProvider.when('/nggrid-example', {templateUrl: 'partials/nggrid-example.html', controller: 'nggrid-exampleCtrl'});
	  $routeProvider.when('/mentors', {templateUrl: 'partials/mentors.html', controller: 'mentorsCtrl'});
	  $routeProvider.when('/mentoring/links', {templateUrl: 'partials/mentoring/mentoring_links.html', controller: 'mentorsCtrl'});
	  $routeProvider.when('/phototree', {templateUrl: 'partials/photo/photoTree.html', controller: 'photoTreeCtrl'});
	  $routeProvider.otherwise({redirectTo: '/home'});
  }]);

