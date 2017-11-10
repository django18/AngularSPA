var app=angular.module("project",[]);

app.controller("mainCntrl",["$scope","mainService","$log",function ($scope,mainService,$log) {
	// body...
	$scope.greeting="namaste";
	$scope.msg="Assalam Walekum";
    //$scope.newsData=[];
    mainService.getNews(function(result){
		$log.log("Data Received");
     $scope.newsData=result;    
	});
 //    $scope.fGetNews=function(){
	// mainService.getNews(function(result){
	// 	$log.log("Data Received");
 //     $scope.newsData=result;    
	// });

	// mainService.getGreeting($scope.msg,function(result){
 //     $scope.greeting=result;    
	// });
	
// }	
    
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

app.service('mainService', ['$http','$log', function($http,$log){
	$log.log("Main Service for news Instantiated....");
	this.getNews=function(callBack)
	{
	 $log.log("Get news start");	
     $http(
     	{url:"http://localhost:8080/news",
     	method:"GET"
     	}).then(function(resp){
     			$log.log(resp.data);
     			callBack(resp.data.newsData);
     		},
     		function(resp){
     			$log.error("Error fetching news");
     		})
	}
}])


