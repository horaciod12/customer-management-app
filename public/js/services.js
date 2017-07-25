(function(){

	var app = angular.module('customersapp', []);

	app.factory('CustomersApp', function(){

		var customers = [
							{"id":"1","name":"James Silver","email":"silver_james@testemail.com","city":"London"},
							{"id":"2","name":"Walter Pinkman","email":"walter_p@testemail.com","city":"New York"},
							{"id":"3","name":"Pedro Rodriguez","email":"r_pedro@testemail.com","city":"Mexico DF"},
							{"id":"4","name":"Joao Fernandez","email":"fernandez_j@testemail.com","city":"Lisboa"},
							{"id":"5","name":"Mirko Desz","email":"md@testemail.com","city":"Moscow"},
							{"id":"6","name":"Albert Smith","email":"smith_a@testemail.com","city":"Buenos Aires"}
						];

		return {

			list: function() {
				return customers;
			},
			get: function(id) {
				return customers.filter(function(customer){
					return customer.id === id;
				})[0];
			},
			create: function(customer) {
				customers.push(customer);
			},
			update: function(customer) {
				for (var i = 0; i < customers.length; i++) {
					if(customers[i].id === customer.id) {
						customers[i] = customer;
						return;
					}
				}
			},
			remove: function(id) {
				for (var i = 0; i < customers.length; i++) {
					if(customers[i].id === id) {
						customers.splice(i, 1);
						return;
					}
				}
			}
		
		}
	
	})

}());