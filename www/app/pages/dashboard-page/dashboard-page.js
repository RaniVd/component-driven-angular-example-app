(function() {
	angular.module('exampleApp.directives').directive('pageDashboard', dashboard);

	function dashboard() {
		return {
			templateUrl: 'app/pages/dashboard-page/dashboard-page.html',
			controllerAs: 'dashboard',
			controller: ['$scope', '$log', function ($scope, $log) {
				var vm = this;

				vm.teamsInPhaseOne = [
					{name: 'Team1', 'members': [{'name': 'member1'}]}
				];
				vm.teamsInPhaseTwo = [
					{name: 'Team2', 'members': [{'name': 'member2'}]}

				];
				vm.teamsInPhaseThree = [
					{name: 'Team3', 'members': [{'name': 'member3'}]}
				];

				vm.viewTeamDetail = function(event, data) {
					//load team detail
					$log.info('loading team detail ', data);
				};

				$scope.$on('dashboard-view-team', vm.viewTeamDetail);
			}]
		}
	}
})();