var app = angular.module('mainModule', []);

app.config(function  ($provide) {  	
	$provide.decorator('$log', function  ($delegate) {
		return {
			/*log: function  (message) {
				$delegate.log(message.toUpperCase());
			},*/
			awesome: function  (message) {
				$delegate.info(message);
			}
		};
	});
});

app.controller('BooksController', function  ($log, books) {
	// $log.log('this message is in lower case but will be transformed to UPPERCASE because of its decorator.');

	//console.log($log);

	$log.awesome('Hi, I am printed by awesome method, attched to $log service by decorating it.');

  console.log(books);
});