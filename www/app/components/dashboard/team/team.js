(function() {
    angular.module('exampleApp.directives').directive('elemTeam', team);

    function team() {
        return {
            templateUrl: 'app/components/dashboard/team/team.html',
            scope: {
                competingTeam: '='
            },
            link: function(scope, element, attr) {
                function viewDetail() {
                    scope.$emit('dashboard-view-team', {'team': scope.competingTeam});
                }

                element.bind('click', viewDetail);
            }
        }
    }
})();