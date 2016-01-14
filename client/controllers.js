/**
 * Created by psladkov on 13.01.2016.
 */


    var phonecatApp = angular.module('mapApp', ['yaMap','ymaps']);

    phonecatApp.controller('MapCtrl', function($scope) {

        $scope.test={};
        $scope.test.name="";

        $scope.textDisabled = function()
        {
            if ($scope.test&&$scope.test.name&&$scope.test.name.length>5)
                return true;
            return false;
        }
        $scope.clean = function()
        {
            $scope.test.name='';
        }

        var _map;
        $scope.afterMapInit = function(map){
            _map = map;
        };
        $scope.del = function(){
            _map.destroy();
        };
});
