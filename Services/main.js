(function () {
    angular.module('myApp')
        .service('listService', function ($localStorage) {

            var self = this;
            var listItems = [];

            if ($localStorage.listItems){
                listItems = $localStorage.listItems;
            }
            else if (!$localStorage.listItems){
                listItems = [
                    {
                        name: "List 1",
                        icon: 'images/X.png',
                        completed: false,
                        taskList: []
                    },
                    {
                        name: "List 2",
                        icon: 'images/X.png',
                        completed: false,
                        taskList: []
                    }
                ];
                $localStorage.listItems = listItems;
            }



            self.getLists = function () {
                return listItems;
            };

            self.addItem = function (listItem, taskToAdd) {
                if (!taskToAdd) {
                    listItems.push(
                        {
                            name: listItem,
                            icon: 'images/X.png',
                            completed: false,
                            taskList: []
                        }
                    )
                }
                else {
                        listItem.taskList.push(
                            {
                                name: taskToAdd,
                                icon: 'images/X.png',
                                completed: false
                            }
                        )
                }
                
            };

            self.markComplete = function (listItems) {
                if (listItems.completed === false) {
                    listItems.icon = 'images/checkmark.png';
                    listItems.completed = true;
                }
                else if (listItems.completed === true) {
                    listItems.icon = 'images/X.png';
                    listItems.completed = false;
                }
            };

            self.remove = function (listItem , taskItem) {
                if (!taskItem) {
                    var index = listItems.indexOf(listItem);
                    listItems.splice(index, 1);
                }

                else {
                  var index = listItem.taskList.indexOf(taskItem);
                    listItem.taskList.splice(index, 1);
                }
            };

            self.deleteCompleted = function (listItem) {
                var newArray = [];
                if(listItem) {
                    for (i = 0; i < listItem.taskList.length; i++){
                        if (listItem.taskList[i].completed === true){
                            newArray.push(listItem.taskList[i]);
                        }
                    }
                    for (i = 0; i < newArray.length; i++) {
                        index = listItem.taskList.indexOf(newArray[i]);
                        listItem.taskList.splice(index, 1);
                    }
                }
                else {
                    for(i = 0; i < listItems.length; i++) {
                        if(listItems[i].completed) {
                            newArray.push(listItems[i]);
                        }
                    }
                   for (i = 0; i < newArray.length; i++) {
                       index = listItems.indexOf(newArray[i]);
                       listItems.splice(index, 1);
                   }
                }
            }

        });


})();