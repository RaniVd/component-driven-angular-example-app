angular.module('exampleApp.routing').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('dashboard', {
			url: '/dashboard',
			template: '<page-dashboard></page-dashboard>'
		});

	$urlRouterProvider.otherwise('/dashboard');
}]);