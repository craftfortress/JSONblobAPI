// Basic JSONblob api

var id = '35dead94-9b34-11e7-aa97-4126f9ae56b9';
var url = "https://jsonblob.com/api/jsonBlob/" + id;
var query = "storedValue";
var headers = new Headers();
headers.set('Content-Type', 'application/json');

var init = {
	method: 'GET',
	headers: headers,
	mode: 'cors',
	cache: 'default'
}

function getValue() {
	fetch(url, headers).then(function(response) {
		return response.json();
	}).then(function(obj) {
		console.log(obj + " GET received from " + url);
		//alert(obj);
		queries = obj;
	});
}

function updateValue() {
	fetch(url)
		.then(function(data) {
			init.method = 'PUT';
			query = "updatedValue"
			init.body = JSON.stringify(query);
			fetch(url, init)
				.then(function(res) {
					console.log(query + " PUT sent to URL " + url)
				})
				.catch(function(res) {
					console.log(res)
				})
		}).catch(function(error) {});
}

// Test setting and retrieving your JSON blob
setInterval(function() {
	getValue();
	updateValue();
}, 5000);