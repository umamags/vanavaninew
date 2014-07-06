'use strict';

/* Services */
var vanavaniServices = angular.module('vanavaniServices', ['ngResource']);

vanavaniServices.factory('Teacher', ['$resource',
  function($resource){
    return $resource('php/teachersList.php', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);
