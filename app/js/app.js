'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
  $routeProvider.when('/pta', {templateUrl: 'partials/pta.html', controller: 'ptaCtrl'});
  $routeProvider.when('/teachersList', {templateUrl: 'partials/teachersList.html', controller: 'teachersListCtrl'});
  $routeProvider.when('/photoGallery', {templateUrl: 'partials/photoGallery.html', controller: 'photoGalleryCtrl'});
  $routeProvider.when('/videoGallery', {templateUrl: 'partials/videoGallery.html', controller: 'videoGalleryCtrl'});
  $routeProvider.when('/showCase', {templateUrl: 'partials/showCase.html', controller: 'showCaseCtrl'});
  $routeProvider.when('/contactUs', {templateUrl: 'partials/contactUs.html', controller: 'contactUsCtrl'});
  $routeProvider.when('/jobs', {templateUrl: 'partials/jobs.html', controller: 'jobsCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
