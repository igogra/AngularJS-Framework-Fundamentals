app.controller('menuController', ['$scope', function($scope) {
    $scope.model = { title: 'Our Menu' };

    $scope.changeMainDish = function(item) {
        $scope.model.mainDish = {
            name: item.name,
            price: item.price + '€'
        };
    };

    $scope.$watch('model.mainDish', function(newValue, oldValue) {
        if (typeof newValue !== 'undefined' && newValue.name === 'BBQ Chicken Pizza') {
            alert('You have selected the BBQ Chicken Pizza!');
        }
    });
}]);
