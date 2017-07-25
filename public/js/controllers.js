var app = angular.module('controllers', []);

app.controller('listCtrl', function($scope, CustomersApp){

	$scope.customers = CustomersApp.list();

	$scope.add = function() {
		CustomersApp.create({
			id: new Date().getTime().toString(),
			name: $scope.name,
			email: $scope.email,
			city: $scope.city			
		})

		$scope.name = "";
		$scope.email = "";
		$scope.city = "";
		
	}

	$scope.sort = function(value) {
		$scope.sorted = value;
	}
	
})

app.controller('editCtrl', function($scope, $routeParams, CustomersApp, $window){

	$scope.id = $routeParams.id;
	$scope.customer = angular.copy(CustomersApp.get($scope.id));
	$scope.save = function() {
		CustomersApp.update($scope.customer);
		$window.location.href = '/#!/customers';
	}
	
	$scope.delete = function(id) {
		CustomersApp.remove(id);
		$window.location.href = '/#!/customers';
	}
		
})

app.controller('NavbarController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
})