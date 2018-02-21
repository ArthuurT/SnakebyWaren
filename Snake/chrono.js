var start = 0	//date du départ du chrono
var end = 0		//date actuel
var diff = 0	//différence des deux
var timerID

function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
<<<<<<< HEAD
=======
	var hr = diff.getHours()-1
>>>>>>> cf6b46f6c1cf4784fe6a2a750519b588b22f7f55
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
<<<<<<< HEAD
	document.getElementById("chronotime").innerHTML = min + ":" + sec + ":" + msec
=======
	document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
>>>>>>> cf6b46f6c1cf4784fe6a2a750519b588b22f7f55
	timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
	start = new Date()
	chrono()
}

function chronoReset(){
<<<<<<< HEAD
	document.getElementById("chronotime").innerHTML = "00:00:000"
	start = new Date()
}
function chronoStopReset(){
	document.getElementById("chronotime").innerHTML = "00:00:000"
=======
	document.getElementById("chronotime").innerHTML = "0:00:00:000"
	start = new Date()
}
function chronoStopReset(){
	document.getElementById("chronotime").innerHTML = "0:00:00:000"
>>>>>>> cf6b46f6c1cf4784fe6a2a750519b588b22f7f55
	document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop(){
	clearTimeout(timerID)
}
