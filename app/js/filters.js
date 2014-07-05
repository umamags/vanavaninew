'use strict';

/* Filters */
console.log("Mahesh in filters.js 1");
angular.module('vanavaniFilters', []).filter('checkmark', function() {
	  return function(input) {
	    return input ? '\u2713' : '\u2718';
	  };
	});
