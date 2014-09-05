'use strict';

/* Controllers */
var vanavaniControllers = angular.module('vanavaniControllers');

vanavaniControllers.controller('studentsCtrl', 
        function($scope, $location, $http) {		
			$scope.rowHeight = 90;
	
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
	        	  $scope.pageHeight = $scope.rowHeight * data.length;
	              if (!$scope.$$phase) {
	                  $scope.$apply();
	              }
	          };
	          $scope.getPagedDataAsync = function (pageSize, page, searchText) {
	              setTimeout(function () {
	                  var data;
	                  var url = 'jsondata/studentsDetails3.json';
	                  
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
	          $scope.getImage = function(row, col, imageName) {
	  			var name = imageName;
				name = name.replace("_medium.jpg", "");
				name = name.replace("_medium.JPG", "");
				$scope.studentImage = "images/students/" + name;
				
				$scope.StudentName = row.getProperty("StudentName");
				$scope.TV = row.getProperty("TV");
				$scope.newspaper = row.getProperty("newspaper");
				$scope.vehicle = row.getProperty("vehicle");
	          }
	          
	          $scope.gridOptions = {
	        	        data: 'myData',
	        	        enablePaging: false,
	        			showFooter: true,
	        	        totalServerItems: 'totalServerItems',
	        	        filterOptions: $scope.filterOptions,
	        	        showFilter: true,
	        	        enableColumnResize: true,
	        	        enableColumnReordering: true,
	        	        showColumnMenu: true,
	        	        showGroupPanel: true,
	        	        multiSelect: false,
	        	        rowHeight: $scope.rowHeight,
	        	        columnDefs: [
	     	        	            {field: "StudentName", width: "100"},
	     	        	            {field: "PhotoFileName", width: "100",
	     	        	            	cellTemplate: '<div ng-click="getImage(row, col, row.getProperty(col.field))"><img src="images/students/{{row.getProperty(col.field)}}" /></div>'
	     	        	            },
	     	        	            {field: "Class", width: "100"},
	     	        	            {field: "Address", width: "300"},
	     	        	            {field: "FatherOccupation", width: "100"},     	        	            
	     	        	            {field: "siblings", width: "100"},
	     	        	            {field: "newspaper", width: "100"},
	     	        	            {field: "Internet", width: "100"},
	     	        	            {field: "vehicle", width: "100"},
	     	        	            {field: "Readinghabit", width: "100"},
	     	        	            {field: "TVProgramName", width: "100", visible: false},
	     	        	            {field: "FatherName", width: "100", visible: false},
	     	        	            {field: "MotherName", width: "100", visible: false},
	     	        	            {field: "MotherOccupation", width: "100", visible: false},
	     	        	            {field: "VacationActivity", width:"100", visible: false}
	     	        	        ]
	        	    };          
        });

vanavaniControllers.controller('khanAcademyCtrl', 
        function($scope, $location, $http) {
		$scope.filterOptions = {
        	        filterText: "",
        	        useExternalFilter: true
        	    }; 
          $scope.totalServerItems = 0;
          $scope.pagingOptions = {
              pageSizes: [250, 500, 1000],
              pageSize: 250,
              currentPage: 1
          };	    
          $scope.setPagingData = function(data, page, pageSize){
        	  var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        	  $scope.myData = pagedData;
        	  $scope.totalServerItems = data.length;
              if (!$scope.$$phase) {
                  $scope.$apply();
              }
          };
          $scope.getPagedDataAsync = function (pageSize, page, searchText) {
              setTimeout(function () {
                  var data;
                  var url = 'jsondata/khanAcademyList.json';
                  
                  if (searchText) {
                      var ft = searchText.toLowerCase();
                      $http.get(url).success(function (largeLoad) {		
                          data = largeLoad.filter(function(item) {
                              return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                          });
                          page = 1;
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
        	        showGroupPanel: true,
        	        columnDefs: [
      	        	            {field: "Category", width: 300},
      	        	            {field: "Lesson", width: 600} 
      	        	]
        	    };
          
        });

