(function () {
    angular.module("myApp")
        .service("toastService" , function ($mdToast) {
            var self = this;

            self.showSimpleToast = function(itemName) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(itemName + ' Created!')
                        .position('bottom right')
                        .hideDelay(3000)
                );
            };
        });
})();