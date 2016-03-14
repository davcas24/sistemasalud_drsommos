angular.module('AngularScaffold.Controllers')
  .controller('Reg_DoctorController', ['authService', '$scope', '$rootScope', '$sessionStorage',  function (authService, $scope, $rootScope, $sessionStorage) {

      $scope.user = {};
      $scope.especialidades = [];

      function updateList() {
        $('#checklist :checked').each(function() {
          $scope.especialidades.push($(this).val());
          //console.log($(this).val());
        });
      }

      function uncheckList() {
        $('#checklist :checked').each(function() {
          $(this).prop("checked",false);
          //console.log($(this).val());
        });
      }

      function clearText() {
        $('#texto').val('');
        $('#texto1').val('');
        $('#texto2').val('');
        $('#texto3').val('');
        $('#texto4').val('');
        $('#texto5').val('');
      }



      $scope.register = function(){
        updateList();
        uncheckList();
        var user = {nombre: $scope.user.nombre, apellido:  $scope.user.apellido, identidad:  $scope.user.identidad,
        telefono:  $scope.user.telefono, correo:  $scope.user.correo, password:  $scope.user.password,
        especialidades: $scope.especialidades, scope: ['Doctor']};
        for (var i = 0; i < $scope.especialidades.length; i++) {
          console.log($scope.especialidades[i]);
        }
        console.log(user);
        authService.Register(user).then(function(response){
          //$scope.login({username: user.username, password: user.password});
        }).catch(function(err){
          console.log(err);
          alert(err.data.error + " " + err.data.message);
        })
        clearText();
      }
  }]);
