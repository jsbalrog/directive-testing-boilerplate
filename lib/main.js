angular.module('myApp', []).controller('MyCtrl', function($scope) {
  $scope.title = 'My title';
});

angular.module('myApp').directive('myDirective', function() {
	return {
    restrict: 'EA',
    scope: false,
    link: function(scope, elem, attrs) {
      scope.changeTitle = function() {
        scope.title = 'My Directive Title';
      };
    }
  };
});