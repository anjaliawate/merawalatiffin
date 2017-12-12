angular.module('merawalatiffin.controllers', [])



  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  .controller('AboutCtrl', function($scope, $stateParams) {
  //$scope.orderData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/about.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();

  // };

  // Perform the order action when the user submits the order form
  $scope.about = function() {
    //console.log('Doing order', $scope.orderData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    // $timeout(function() {
    //   $scope.closeLogin();
    // }, 1000);
    };

 });
