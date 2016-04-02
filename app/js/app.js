//declare variable 'app' and set equal to angular module called 'signupFormApp', link to it in index.html using ng-app in <html> tag
var app = angular.module('signupFormApp', []);

//custom directive, camel-cased 'optIn' links to <opt-in> tag in index.html
app.directive('optIn', function(){
	return{
		//<opt-in> tag in index.html should load opt-in.html template
		templateUrl: 'opt-in.html',
		//this is a new piece of functionality, so use 'E' for element
		restrict: 'E',
		//set transclude property to true so that adding ng-transclude in the opt-in.html template's span tag pulls in the template
		transclude: true
	};
});