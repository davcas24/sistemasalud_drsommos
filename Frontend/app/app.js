var app = angular.module('AngularScaffold', ['ui.router', 'ngStorage', 'AngularScaffold.Services', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html',
            controller: 'HomeController'
        })
				.state('registrardoctor', {
            url: '/registrardoctor',
            templateUrl: './views/Reg_Doctor.html',
            controller: 'Reg_DoctorController'
        })
				.state('registrarpaciente', {
            url: '/registrarpaciente',
            templateUrl: './views/Reg_Pacient.html',
            controller: 'Reg_PacientController'
        })

}]);
