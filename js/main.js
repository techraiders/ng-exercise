if ('caches' in window) {
	console.log('Browser supports cache.');
	
	// Creating a cache requires a caches.open call with a cache name:


	// The caches.open call returns a Promise and the cache object that was either created or existed before the open call.
	
	caches.open('test-cache').then(function  (cache) {
		console.log('Cache is created and accessible.', cache);
	});


	// You can think of a cache as an array of Request objects which act as keys to their responses which are stored by the browser. Simple addition to cache is happens via two main methods: add and addAll. You can provide these methods a string for the URL that should be fetched and cached or a Request object.

	caches.open('test-cache').then(function  (cache) {
		cache.addAll(['/', 'images/logo.png']).then(function  () {
			console.log('cached');
		});
	});


	// The addAll method accepts an array of URLs whose URLs and responses should be cached. addAll returns a Promise. To add a single URL, us the add method:

	caches.open('test-cache').then(function (cache) {
		cache.add('/page/1'); // "/page/1 URL will be fetched and cached! "
	});


	// add can also accept a custom Request:
	
	caches.open('test-cache').then(function  (cache) {
		cache.add(new Request('/page/1', {/* request options */}));
	});

	
	// Similar to add is put whereby you can add a URL and its Response objects:

	fetch('/page/1').then(function  (response) {
		return caches.open('test-cache').then(function  (cache) {
			return cache.put('/page/1', response);
		});
	});


	// To view requests that have been cached, you can use the individual cache's keys method to retrieve an array of cached Request objects:

	caches.open('test-cache').then(function  (cache) {
		cache.keys().then(function  (cachedRequests) {
			//console.log(cachedRequests); // [Request, Request]
		});
	});

	/*
		Request {
			bodyUsed: false,
			credentials: "omit",
			headers: Headers,
			integrity: "",
			method: "GET",
			mode: "no-cors",
			redirect: "follow",
			referrer: "",
			url: "https://fullhost.tld/images/logo.png"
		}
	*/


	// If you'd like to view the response of a cached Request, you can do so by using cache.match or cache.matchAll

	caches.open('test-cache').then(function  (cache) {
		cache.match('/page/1').then(function  (matchedResponse) {
			console.log(matchedResponse);
		});
	});

	/*
		Response {
			body: (...),
			bodyUsed: false,
			headers: Headers,
			ok: true,
			status: 200,
			statusText: "OK",
			type: "basic",
			url: "https://davidwalsh.name/page/1"
		}
	*/


	// Removing a Cached Request: To remove a request from cache, use the cache's delete method:
	
	caches.open('test-cache').then(function  (cache) {
		cache.delete('/page/1');
	}); // The cache will no longer contain /page/1!


	// Getting Existing Cache Names: To get the names of existing caches, use caches.keys:

	caches.keys().then(function  (cacheKeys) {
		//console.log(cacheKeys); // e.g ["test-cache"]
	});


	// Deleting A Cache: Deleting a cache is simple once you have cache key name:

	caches.delete('test-cache').then(function  () {
		console.log('Cache successfully deleted!');
	});


	// You'll often delete a cache when you're replacing with a new one (to trigger re-installation of a new service worker):

	// Assuming `CACHE_NAME` is the newest name
	// Time to clean up the old!

	var CACHE_NAME = 'version-8';
	caches.keys().then(function  (cacheNames) {
		return Promise.all(
			cacheNames.map(function  (cacheName) {
				if (cacheName != CACHE_NAME) {
					return caches.delete(cacheName);
				}
			});
			);
	});
}