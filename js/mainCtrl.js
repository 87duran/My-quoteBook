var app = angular.module('quoteBook');
app.controller('mainCtrl', function($scope, dataService) {
	$scope.test = 'hello world';
	$scope.quotes = dataService.getData();
	$scope.toggleSearch = function(){
		$scope.showSearch = !$scope.showSearch;
		$scope.showSearch2 = false;
		$scope.showSearch3 = false;
	};
	$scope.toggleSearch2 = function(){
		$scope.showSearch2 = !$scope.showSearch2;
		$scope.showSearch = false;
		$scope.showSearch3 = false;
	};
	$scope.toggleSearch3 = function(){
		$scope.showSearch3 = !$scope.showSearch3;
		$scope.showSearch = false;
		$scope.showSearch2 = false;
	};
	$scope.addQuote = function() {
		dataService.addData($scope.quote);
		$scope.quotes = dataService.getData();
		$scope.quote = ''
	};
	$scope.removeQuote = function() {
		dataService.removeData($scope.removeQuote);
		$scope.quotes = dataService.getData();
		$scope.removeQuote = ''
	};


});