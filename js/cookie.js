document.addEventListener('DOMContentLoaded', function( event ) {
	var x = document.getElementById("cookieConsent");
	
	if (isCookie("acceptedCookie")) {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
});

function isCookie(name) {
  	var find  = false;
	
	var cookieArray = getCookies();
	for (var key in cookieArray) {
		console.log("key " + key + " has value " + cookieArray[key]);
		if (key.trim() == name ) {
			find = true;	
		}
	}
	
  	return find;	
}

function getCookies() {
  	var pairs = document.cookie.split(";");
  	var cookies = {};
  	for (var i=0; i<pairs.length; i++){
  	  var pair = pairs[i].split("=");
  	  cookies[pair[0]] = unescape(pair[1]);
  	}
  	return cookies;
}

function closeCookieDiv() {
    setCookie("acceptedCookie");
    var x = document.getElementById("cookieConsent");
	x.style.display = "none";
}
 
function setCookie(cookieName) {
	var expire=new Date;
	expire.setMonth(expire.getMonth() + 12);
	var cookie = cookieName+'=1/';
	cookie+="; expires="+expire.toGMTString()
	cookie+="; path=/";
	cookie+="; true";
	document.cookie=cookie;	
}
