
'use strict';

function TabsController($scope, $state, $timeout) {

  // ui-router state
  $scope.state = $state;

  // here we could add side menu or similat stuff

}
module.exports = ['$scope', '$state', '$timeout', TabsController];
