angular.module('AngularScaffold.Controllers')
  .controller('navbarController', ['authService', '$scope', '$rootScope', '$sessionStorage','$state',  function (authService, $scope, $rootScope, $sessionStorage,$state) {
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;
      //$scope.Mod = {text: ""};
      //$scope.Add = {text: ""};|

      $scope.goHome = function(){
  		    $state.go('home');
          console.log("home");
      }

      $scope.goReg_doc = function(){
  		    $state.go('registrardoctor');
          console.log("register");
      }

      $scope.goReg_pac = function(){
  		    $state.go('registrarpaciente');
          console.log("register");
      }

      $scope.logout = function(){
        authService.Logout().then(function(response){
          alert('logged out correctly');
          $sessionStorage.$reset();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        })
      }


      $scope.login = function(user){
          authService.Login(user).then(function(response){
          $sessionStorage.currentUser = response.data;
          console.log($sessionStorage.currentUser);
          alert("Login exitoso")
          $scope.user = {};
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

  }]);
