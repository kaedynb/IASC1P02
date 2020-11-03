//This will output when the page loads
//document.write("Output Zero Here");

//This will output when a button is pressed
function theRest(){
	
	var one ="Output One Here";
	var two ="Output Two Here";
	var three ="Output Three Here";
	
	
	document.getElementById("output").innerHTML=one;
	document.getElementById("output").id="output2";
	document.getElementById("output2").innerHTML=two;
	document.getElementById("output2").id="output3";
	document.getElementById("output3").innerHTML=three;
}

