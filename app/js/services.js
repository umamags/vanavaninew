'use strict';

/* Services */
console.log("Mahesh in services.js 1");
var vanavaniServices = angular.module('vanavaniServices', ['ngResource']);

vanavaniServices.factory('Teacher', ['$resource',
  function($resource){
    return $resource('php/teachersList.php', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);
