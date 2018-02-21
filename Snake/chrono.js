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
	document.getElementById("chronotime").innerHTML = min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
	start = new Date()
	chrono()
}

function chronoReset(){
	document.getElementById("chronotime").innerHTML = "00:00:000"
	start = new Date()
}
function chronoStopReset(){
	document.getElementById("chronotime").innerHTML = "00:00:000"
	document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop(){
	clearTimeout(timerID)
}
