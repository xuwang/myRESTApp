myApp.factory('dataFactory', function($http) {
	/** https://docs.angularjs.org/guide/providers **/
	var urlBase = 'https://localhost:3000/api/v1/products';
	var _prodFactory = {};

	_prodFactory.getProducts = function() {
		return $http.get(urlBase);
	};

	return _prodFactory;
});
