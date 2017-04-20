app.controller('HomeController', ['$scope','forecast', function($scope,forecast) {
  forecast.success(function(data){
    $scope.emails = data;
  });
}]);