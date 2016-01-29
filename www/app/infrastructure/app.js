var app = angular.module('exampleApp', ['ui.router', 'ngMaterial', 'exampleApp.directives', 'exampleApp.services', 'exampleApp.filters', 'exampleApp.routing']);

app.config(['$httpProvider', '$compileProvider', function($httpProvider, $compileProvider) {
    //schedules http requests, all requests within 10ms are combined together -> 1 digest
    $httpProvider.useApplyAsync(true);
    //TODO enable this for production -> performance boost
    //$compileProvider.debugInfoEnabled(false);
}]);

angular.module('exampleApp.directives', []);
angular.module('exampleApp.services', []);
angular.module('exampleApp.filters', []);
angular.module('exampleApp.routing', []);