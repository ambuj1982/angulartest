function AchCtrl($scope){


    $scope.ListVals = [
            {text:'Hello1', done:false},
            {text:'Hello2', done:false}
        ];
    //$scope.Totalcount = $scope.ListVals.length;

    $scope.getTotallist = function(){
        return $scope.ListVals.length;
    }

    $scope.clearList = function(){
        return $scope.ListVals = _.filter($scope.ListVals, function (ListVal) {
                        return !ListVal.done;
        })
    }
    $scope.Addlist = function(){
        $scope.ListVals.push({text:$scope.formEnterVal, done:false});
        $scope.formEnterVal = "";
    }

}