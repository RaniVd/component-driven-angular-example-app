(function() {
    angular.module('exampleApp.directives').directive('elemTeam', team);

    function team() {
        return {
            templateUrl: 'app/components/dashboard/team/team.html',
            scope: {
                competingTeam: '='
            }
        }
    }
})();