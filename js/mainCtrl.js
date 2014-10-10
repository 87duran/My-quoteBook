var app = angular.module('quoteBook');
app.controller('mainCtrl', function($scope, dataService) {
	$scope.test = 'hello world';
	$scope.quotes = dataService.getData();
	$scope.toggleSearch = function(){
		$scope.showSearch = !$scope.showSearch;
	};
	$scope.toggleSearch2 = function(){
		$scope.showSearch2 = !$scope.showSearch2;
	};
	$scope.addQuote = function() {
		dataService.addData($scope.quote);
		$scope.quotes = dataService.getData();
	};
	$scope.removeQuote = function() {
		dataService.removeData($scope.quote);
		$scope.quotes = dataService.getData();
	};


});