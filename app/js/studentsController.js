'use strict';

/* Controllers */
var vanavaniControllers = angular.module('vanavaniControllers');

vanavaniControllers.controller('studentsCtrl', 
        function($scope, $location, $http) {
				  
		$scope.filterOptions = {
        	        filterText: "",
        	        useExternalFilter: false
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
                  var url = 'jsondata/studentsDetails.json';
                  
                  if (searchText) {
                      var ft = searchText.toLowerCase();
                      $http.get(url).success(function (largeLoad) {		
                          data = largeLoad.filter(function(item) {
                              return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                          });
                          $scope.setPagingData(data,page,pageSize);
                      });            
                  } else {
                      $http.get(url).success(function (largeLoad) {
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
        	        enablePaging: true,
        			showFooter: true,
        	        totalServerItems: 'totalServerItems',
        	        pagingOptions: $scope.pagingOptions,
        	        filterOptions: $scope.filterOptions,
        	        showFilter: true,
        	        columnDefs: [
     	        	            {field: "StudentName"},
     	        	            {field: "Class"},
     	        	        ]
        	    };
          
        });

