angular.module('registrationService', ['ngResource']).
factory('registration', ['$resource', function($resource) {
    return $resource('http://reqres.in/api/register', {}, {
        submit: {
            method: 'POST'
        },
    });
}]);
