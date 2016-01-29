(function() {
    angular.module('exampleApp.directives').directive('elemLane', function() {
        return {
            replace: true,
            templateUrl: 'app/components/dashboard/lane/lane.html',
            scope: {
                teams: '=',
                description: '@'
            }
        }
    });
})();
