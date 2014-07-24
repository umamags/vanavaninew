'use strict';

/* Controllers */
var vanavaniControllers = angular.module('vanavaniControllers', []);

vanavaniControllers.controller('teachersListCtrl', ['$scope', 'Teacher',
  function($scope, Teacher) {
    $scope.teachers = Teacher.query();
    $scope.orderProp = 'sno';
  }]);


vanavaniControllers.controller('photoShowAllCtrl', ['$scope', '$routeParams', 'Photo',
     function($scope, $routeParams, Photo) {
       $scope.photos = Photo.query({folderName: $routeParams.folderName}, function(photo) {
       });
     }]);

vanavaniControllers.controller('photoDetailCtrl', ['$scope', '$routeParams',
       function($scope, $routeParams) {
		  var name = $routeParams.imageName;
	      name = name.replace("_medium.jpg", "");
		  name = name.replace("_medium.JPG", "");	    
	
		  $scope.folderName = $routeParams.folderName;
		  $scope.imageName = name;
       }]);

//Simple data
vanavaniControllers.controller('nggrid-example2Ctrl', ['$scope',
                                            function($scope) {
	$scope.myData = [{name: "Moroni", age: 50},
	                 {name: "Tiancum", age: 43},
	                 {name: "Jacob", age: 27},
	                 {name: "Nephi", age: 29},
	                 {name: "Enos", age: 34}];	
	$scope.gridOptions = { data: 'myData' };
                                            }]);

//Grouping by data using html5
vanavaniControllers.controller('nggrid-example3Ctrl', ['$scope',
                                                      function($scope) {
          	$scope.myData = [{name: "Moroni", age: 50, sex: 'M'},
          	                 {name: "Tiancum", age: 43, sex: 'M'},
          	                 {name: "Jacob", age: 27, sex: 'F'},
          	                 {name: "Nephi", age: 29, sex: 'F'},
          	                 {name: "Enos", age: 34, sex: 'M'}];	
          	$scope.gridOptions = { 
          			data: 'myData',
          			showGroupPanel: true};
    }]);

//Grouping by data using jquery
vanavaniControllers.controller('nggrid-example4Ctrl', ['$scope',
                                                      function($scope) {
          	$scope.myData = [{name: "Moroni", age: 50, sex: 'M'},
          	                 {name: "Tiancum", age: 43, sex: 'M'},
          	                 {name: "Jacob", age: 27, sex: 'F'},
          	                 {name: "Nephi", age: 29, sex: 'F'},
          	                 {name: "Eclipse", age: 23, sex: 'F'},
          	                 {name: "Enos", age: 34, sex: 'M'}];	
          	$scope.gridOptions = { 
          			data: 'myData',
          			showGroupPanel: true,
          			jqueryUIDraggable: true};
    }]);

vanavaniControllers.controller('nggrid-exampleCtrl', 
            function($scope, $http) {
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
                      if (searchText) {
                          var ft = searchText.toLowerCase();
                          $http.get('jsondata/fedrouting.json').success(function (largeLoad) {		
                              data = largeLoad.filter(function(item) {
                                  return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                              });
                              $scope.setPagingData(data,page,pageSize);
                          });            
                      } else {
                          $http.get('jsondata/fedrouting.json').success(function (largeLoad) {
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
            	        filterOptions: $scope.filterOptions
            	    };
            });


vanavaniControllers.controller('homeCtrl', ['$scope',
                                                    function($scope) {
                                                    }]);

vanavaniControllers.controller('ptaCtrl', ['$scope',
                                            function($scope) {	
                                            }]);

vanavaniControllers.controller('photoGalleryCtrl', ['$scope',
                                            function($scope) {
                                            }]);

vanavaniControllers.controller('videoGalleryCtrl', ['$scope',
                                            function($scope) {
                                            }]);

vanavaniControllers.controller('showCaseCtrl', ['$scope',
                                            function($scope) {
                                            }]);

vanavaniControllers.controller('contactUsCtrl', ['$scope',
                                            function($scope) {
                                            }]);

vanavaniControllers.controller('jobsCtrl', ['$scope',
                                            function($scope) {
                                            }]);
vanavaniControllers.controller('trusteesCtrl', ['$scope',
                                            function($scope) {
                                            }]);
vanavaniControllers.controller('newsLetterCtrl', ['$scope',
                                            function($scope) {
                                            }]);
vanavaniControllers.controller('studentParticularsCtrl', ['$scope',
                                            function($scope) {
                                            }]);
vanavaniControllers.controller('feeStructureCtrl', ['$scope',
                                            function($scope) {
                                            }]);
vanavaniControllers.controller('feeConcessionDetailsCtrl', ['$scope',
                                            function($scope) {
                                            }]);
vanavaniControllers.controller('goalsCtrl', ['$scope',
                                            function($scope) {
                                            }]);
vanavaniControllers.controller('howToSponsorCtrl', ['$scope',
                                            function($scope) {
                                            }]);
vanavaniControllers.controller('thankYouCtrl', ['$scope',
                                            function($scope) {
                                            }]);
