(function() {
	angular.module('exampleApp.directives').directive('elemToolbar', toolbar);

	function toolbar() {
		return {
			templateUrl: 'app/components/toolbar/toolbar.html'
		}
}})();