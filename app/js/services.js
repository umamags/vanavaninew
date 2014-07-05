'use strict';

/* Services */
console.log("Mahesh in services.js 1");
var vanavaniServices = angular.module('vanavaniServices', ['ngResource']);

vanavaniServices.factory('Teacher', ['$resource',
  function($resource){
    return $resource('jsondata/teachers.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);
