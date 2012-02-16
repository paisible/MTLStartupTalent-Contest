
var customEvent = document.createEvent('Event');
customEvent.initEvent('myCustomEvent', true, true);

//var inputs = document.getElementsByTagName("input");
//$("input")[0].change(function(){
send_message("hello");
//});

document.getElementById('foo').addEventListener('myCustomEvent', function() {
  var whatever = read_message();
  switch(whatever){
  	case "red":
		alert("red");
	break;
  }
// send_message("done");
});

function send_message(data) {
  hiddenDiv = document.getElementById('foo');
  hiddenDiv.innerText = data
  hiddenDiv.dispatchEvent(customEvent);
}

function read_message(){
	return document.getElementById("foo").innerText;
}






