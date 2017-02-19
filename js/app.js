
var app = angular.module('app',[]);

app.controller('mainCtrl',function($scope,$http){
	console.log("you are in the js now");

	$scope.allUsers = [];

	$scope.sortByLocation = false;
	$scope.sortByName = false;
	$scope.sortByFollowers = false;

	$scope.getUser = function(){
		if(!$scope.user){
			return;
		}

		$http({
			method : "GET",
			url : "https://api.github.com/users/"+$scope.user
		}).then(function(res){
			console.log(res);
			$scope.user = '';
			$scope.allUsers.push(res.data);
		},function(res){
			console.log(res);
		})
	};

	$scope.remove = function(user){
		for(var i=0;i<$scope.allUsers.length;i++){
			if($scope.allUsers[i].id == user.id){
				$scope.allUsers.splice(i,1);
			}
		}
	}

	$scope.sortTag = function(index){
		$scope.sortByName = false;
		$scope.sortByFollowers = false;
		$scope.sortByLocation = false;
		if(index == '1'){
			$scope.sortByName = true;
		} else if(index == '2'){
			sortByLocation = true;
		} else {
			sortByFollowers = true;
		}
	}

	$scope.sortBy = function(user){
		if($scope.sortByName){
			return user.name;
		}
		if($scope.sortByFollowers){
			return user.followers;
		}
		if($scope.sortByLocation){
			return user.location;
		}
	}

});

app.factory('store',function(){
	
	return{
	}
})