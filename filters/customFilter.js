(function () {
    angular.module("myApp")
        .filter("custom", function () {
            return function(customInput) {
                if (typeof customInput === "string") {
                    var stringArray = customInput.split(' ');
                    for(var i = 0; i < stringArray.length; i++){
                        var result = " ";
                        for(var r = 0; r < stringArray[i].length; r++){
                            if(r === 0){
                                var firstLetter = stringArray[i][r].toUpperCase();
                                result = firstLetter;
                            }
                            else {
                                var otherLetters = stringArray[i][r].toLowerCase();
                                result = result + otherLetters;
                            }
                        }
                        stringArray[i] = result;
                    }

                }
                var newString = stringArray.join(" ");
                return newString;
            }
        });

})();