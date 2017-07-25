(function(){

	var app = angular.module('main', ['ngRoute', 'customersapp', 'controllers']);

	app.config(function($routeProvider){
		$routeProvider
		.when('/customers', {templateUrl: 'views/customers.html'})
		.when('/details', {templateUrl: 'views/details.html'})
		.when('/editcustomer/:id', {templateUrl: 'views/editcustomer.html'})
		.otherwise('/customers')
	})

}());