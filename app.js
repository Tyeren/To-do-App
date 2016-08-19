(function () {
    angular.module('myApp', ['ui.router', 'ngStorage', 'ngMaterial', 'ngAnimate'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/list');
            
            $stateProvider
                .state('list', {
                    url: '/list',
                    template: '<list></list>'
                })
                
                .state('about', {
                    url: '/about',
                    template: '<about></about>'
                })
        })
})();
