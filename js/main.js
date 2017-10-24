'use strict';
(function () {
  var app = angular.module('mainModule', []);

  app.config(function  ($provide) {
  	$provide.decorator('$log', function  ($delegate) {
  		return {
  			log: function  (message) {
  				$delegate.log(message.toUpperCase());
  			}
  		};
  	});
  });

  app.controller('BooksController', function  ($log) {
  	$log.log('this message is in lower case but will be transformed to UPPERCASE because of its decorator.');
  });
  
} () );