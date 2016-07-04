(function() {

function showButton() {

	var div = document.createElement('div');

	var style = "position: absolute; top: 0px; left: 0px; width: 30px; height: 30px; background-color: #fff";

	div.setAttribute("style", style);
	div.setAttribute("id", "mass-unsubscribe-button");
	
	document.body.appendChild(div);
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
