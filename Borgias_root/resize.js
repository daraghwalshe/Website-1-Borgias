/**
* Detects screen size of viewing browser and places the
* website content into center, sized at 1280px
*/

function checkDisplay(){

	var x = screen.width;
	var displayArea = document.getElementById("displayArea");

	
	if(x > 1280){
		var marginSize = (x - 1280)/2
		
		displayArea.style.display = "block";
		displayArea.style.width = "1280px";

		displayArea.style.marginLeft = marginSize + "px";
		}
	
	displayArea.style.visibility = "visible";
}

window.onload = checkDisplay;



















