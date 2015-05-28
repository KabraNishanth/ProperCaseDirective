var app = angular.module('app',[]);

app.controller("mainCtrl", function($scope){
  $scope.user = {};
  $scope.user.name = "nishanth kabra";
});

app.directive("properCase", function(){

          return{
                restrict : "A",
                require: '?ngModel',
                link: function (scope, element, attrs, controller) {
                    if(!attrs.ngModel) return;
                    var capitalize = function (inputValue) {
                        if (inputValue) {
                            var capitalized = inputValue.replace(/([^\W_]+[^\s\-]*) */g, function(txt) {
                                return txt.charAt(0).toUpperCase() + txt.substr(1);
                            });
                            if (capitalized !== inputValue) {
                                controller.$setViewValue(capitalized);
                                controller.$render();
                            }
                            return capitalized;
                        }
                    };
                    controller.$formatters.push(capitalize);
                    controller.$parsers.push(capitalize);
                }
          }

});



