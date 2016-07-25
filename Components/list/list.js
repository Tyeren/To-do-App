(function(){

    var app = angular.module('myApp')
        .component('list', { // the tag for this is <characters></characters>
            templateUrl: 'Components/list/list.html',
            controller: listController
        });

    function listController(listService) {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        var self = this;

       self.listItems = [];

        self.$onInit = function() {
          self.listItems = listService.getLists();
        };

        self.markComplete = function (listItems) {
           listService.markComplete(listItems);
        };

        self.addItem = function (itemToAdd) {
            listService.addItem(itemToAdd)
        };
        
        self.remove = function (listItems) {
            listService.remove(listItems);
        };
        
        self.selectList = function (listItems) {
            self.selectedList = listItems
        };

        self.deleteCompleted = function (list) {
            listService.deleteCompleted(list)
        };

    }

})();