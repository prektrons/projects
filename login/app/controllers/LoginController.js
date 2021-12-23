app.controller('LoginController',function($scope,LoginService)
{
    $scope.email=""
    $scope.password=""
   
   $scope.login=function(){
      var res= LoginService.getLogin($scope.email,$scope.password)
       console.log(res)
    }
});