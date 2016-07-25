(function(){

    var app = angular.module('myApp')
        .component('about', { // the tag for this is <characters></characters>
            templateUrl: 'Components/about/about.html',
            controller: myExampleController
        });

    function myExampleController() {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        
    }
    

})();