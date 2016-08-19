(function(){

    var app = angular.module('myApp')
        .component('task', { // the tag for this is <characters></characters>
            templateUrl: 'Components/task/task.html',
            controller: taskController,
            bindings: {
                selectedList: "="
            }
        });

    function taskController(listService, toastService) {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        var self = this;

       self.listItems = [];

        self.$onInit = function() {
          self.listItems = listService.getLists();
        };

        self.markComplete = function (listItems) {
           listService.markComplete(listItems);
        };

        self.addItem = function (listItem, taskToAdd) {
            listService.addItem(listItem, taskToAdd);
            toastService.showSimpleToast(taskToAdd);
            self.itemToAdd = "";
        };
        
        self.remove = function (listItem, taskItem) {
            listService.remove(listItem, taskItem);
        };

        self.goBack = function () {
            self.selectedList = undefined;
        };
        
        self.deleteCompleted = function (listItem) {
           self.listItems =  listService.deleteCompleted(listItem);
        };
    }

})();