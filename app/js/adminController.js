'use strict';

/* Controllers */
var vanavaniControllers = angular.module('vanavaniControllers');

vanavaniControllers.controller('adminCtrl', 
        function($scope, $location, $http) {
	
        console.log("in admin");  
		$scope.filterOptions = {
        	        filterText: "",
        	        useExternalFilter: true
        	    }; 
          $scope.totalServerItems = 0;
          $scope.pagingOptions = {
              pageSizes: [10, 250, 500, 1000],
              pageSize: 10,
              currentPage: 1
          };	    
          $scope.setPagingData = function(data, page, pageSize){
              $scope.myData = data;
              if (!$scope.$$phase) {
                  $scope.$apply();
              }
          };
          $scope.getPagedDataAsync = function (pageSize, page, searchText) {
              setTimeout(function () {
                  var data;
                  if (searchText) {
                      var ft = searchText.toLowerCase();
                      $http.get('jsondata/students.json').success(function (largeLoad) {		
                          data = largeLoad.filter(function(item) {
                              return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                          });
                          $scope.setPagingData(data,page,pageSize);
                      });            
                  } else {
                      $http.get('jsondata/students.json').success(function (largeLoad) {
                          $scope.setPagingData(largeLoad,page,pageSize);
                      });
                  }
              }, 100);
          };
          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
          $scope.$watch('pagingOptions', function (newVal, oldVal) {
              if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
                $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
              }
          }, true);
          $scope.$watch('filterOptions', function (newVal, oldVal) {
              if (newVal !== oldVal) {
                $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
              }
          }, true);
          $scope.gridOptions = {
        	        data: 'myData',
        	        enablePaging: false,
        			showFooter: false,
        	        totalServerItems: 'totalServerItems',
        	        pagingOptions: $scope.pagingOptions,
        	        filterOptions: $scope.filterOptions
        	    };
          
        });

