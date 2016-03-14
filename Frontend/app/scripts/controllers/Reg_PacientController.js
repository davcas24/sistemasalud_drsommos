angular.module('AngularScaffold.Controllers')
  .controller('Reg_PacientController', ['authService', '$scope', '$rootScope', '$sessionStorage',  function (authService, $scope, $rootScope, $sessionStorage) {

      $scope.user = {};

      function clearText() {
        $('#texto').val('');
        $('#texto1').val('');
        $('#texto2').val('');
        $('#texto3').val('');
        $('#texto4').val('');
        $('#texto5').val('');
      }



      $scope.register = function(){
        var user = {nombre: $scope.user.nombre, apellido:  $scope.user.apellido, identidad:  $scope.user.identidad,
        telefono:  $scope.user.telefono, correo:  $scope.user.correo, password:  $scope.user.password, scope: ['Paciente']};
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
