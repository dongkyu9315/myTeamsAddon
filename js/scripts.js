var myApp = angular.module('myApp', []);

myApp.controller('UrlController', function($scope, $window) {
	$scope.teams = [
		{name: "Boston Red Sox", league: "MLB", homepage: "http://boston.redsox.mlb.com"},
		{name: "New York Yankees", league: "MLB", homepage: "http://newyork.yankees.mlb.com"}
	];
	$scope.openPage = function(index) {
		$window.open($scope.teams[index].homepage, '_blank');
	};
});
