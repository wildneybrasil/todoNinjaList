angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal) {

  $scope.todoListItems = [
    { task: 'Conta de Luz', status: 'off' },
    { task: 'Mercado', status: 'off' }
  ];

  // Dados do form do modal
  $scope.data = {};

  // Criando o modal
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Open modal
  $scope.openModal = function() {
    $scope.modal.show();
  };

  // Close modal
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  // Action do modal
  $scope.addItem = function() {

    $scope.todoListItems.push({
      task: $scope.data.newTask,
      status: 'off'
    });
    $scope.data.newTask = '';
    $scope.closeModal();

  };

});