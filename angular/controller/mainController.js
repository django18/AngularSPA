var app=angular.module("project",[]);

app.controller("mainCntrl",["$scope","mainService",function ($scope,mainService) {
	// body...
	$scope.greeting="namaste";
	$scope.msg="Assalam Walekum";
	mainService.getGreeting($scope.msg,function(result){
     $scope.greeting=result;    
	});
    
	// $scope.getGreeting=function(){
	// 	$http({
	// 	url:'127.0.0.1:4040/greeting?',
	// 	method:'POST',
	// }).then(function(resp){
 //         $scope.greeting=resp.greeting;
 //         $log.
	// },
	// function(resp)
	// {
	// 	$log.error("Error fetching greeting");
	// });
	// }
}]);

app.service('mainService', ['$http','$scope', function($http,$scope){
	this.getGreeting=function(msg,callBack)
	{
      callBack(msg+" Bhaijaan -_-");
	}
}])


