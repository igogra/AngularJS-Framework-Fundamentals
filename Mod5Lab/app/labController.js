app.controller('labController', ['$scope', 'registration', function($scope, registration) {
    $scope.token = null;
    $scope.reset = reset;
    $scope.submit = submit;

    reset();

    function reset() {
        $scope.model = {};
    }

    function submit(model) {
        registration.submit(model).$promise.then(function(response) {
            $scope.token = response.token;
            reset();
        }, function(response) {
            alert('Error');
        });

        alert('Submitted\n' + JSON.stringify(model));
    }
}]);
