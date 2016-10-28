(function() {

function showButton() {
	//Where we want to add our button
    var parentDiv = document.getElementById('rightContents');
	//Our button
	var div = document.createElement('div');
	//Text of said button
	var text = document.createTextNode('Unsubscribe All');
	//We'll need Font-Awesome
	var link = document.createElement('link');

	link.setAttribute('href','https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
	link.setAttribute('rel','stylesheet');
	link.setAttribute('integrity','sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN');
	link.setAttribute('crossorigin','anonymous');

	//Append Font Awesome's Stylesheet to our page
	document.head.appendChild(link);

	//Create icon
	var icon = document.createElement('i');

	//Add style to our icon
	icon.className += "fa fa-trash-o trash-icon";


	//Append text node to the button
	div.appendChild(text);
	//Append icon to the button
	div.appendChild(icon);

    //Set a button id
	div.setAttribute("id", "mass-unsubscribe-button");
	//Add style to our button
    div.className += " unsubscribeBtn";

	//Add our button to the page as a first element
	parentDiv.insertBefore(div,parentDiv.firstChild);
}

function getIdFromUnsubscribeId(id) {
	var extractedId = id.replace('UnsubscribeItemBtn', '');
	return extractedId;
}

function GETparse() {

	var queryDict = {}
	location.search.substr(1).split("&").forEach(function(item) {
		queryDict[item.split("=")[0]] = item.split("=")[1]
	});

	return queryDict;
}

function startUnsubscribing(event) {

	localStorage.setItem('workshop-unsubscriber-started', 1);

	var ids = [];

	var docs = document.querySelectorAll('a.btn_grey_black');
	for (var i = 0; i < docs.length; i++) {
		var d = docs[i];
		ids.push(getIdFromUnsubscribeId(docs[i].id));
		d.click();
	}

	var count = ids.length;

	var timer = setInterval(function() {
		for (var i = 0; i < ids.length; i++) {
			var unsubId = 'Unsubscribed' + ids[i];

			var unsubMsg = document.querySelector('#' + unsubId + ' .workshopItemUnsubscribedDetails div');

			if (unsubMsg) {
				count--;
			}
		}

		if (count == 0) {
			clearInterval(timer);
			console.log('Everything unsubscribed');
			location.reload();
		} else {
			console.log('Still unsubscribing');
		}

	}, 1000);
}

function initButton() {
	document.getElementById("mass-unsubscribe-button").addEventListener("click", startUnsubscribing, false);
}

function init() {
	if (localStorage.getItem('workshop-unsubscriber-started') == 1) {
		if (document.querySelector('a.btn_grey_black')) {
			startUnsubscribing();
		} else {
			localStorage.removeItem('workshop-unsubscriber-started');
		}
	}
}

var getParams = GETparse();
var appId = getParams['appid'];


init();
showButton();
initButton();
console.log('YOUR SCRIPT IS READY');
})();
