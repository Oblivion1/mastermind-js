



var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var antwoord = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()];
var selectedcolor = "";
var currentColors = ["", "", "", ""];
var mastermind = document.getElementById("mastermind");
var correct = 0;
var activerow = 0 ;
const correctcolor = "red";
const correctwrong = "white";
const wrong = "black";

function getRandomColor()
{
	var random = Math.floor( Math.random() * colors.length );
	return colors[random];
}



document.createElement("div");
for(var aantalrijen = 0; aantalrijen < 12; aantalrijen++){
//rij
	var rij = document.createElement("div");
	rij.setAttribute("id", "rij_" + aantalrijen);
//kegels
	for(var colum = 0; colum < 4; colum++){
		var kegel = document.createElement("div");
		kegel.setAttribute("id", "kegel_" + aantalrijen + "_" + colum);
		kegel.setAttribute("class", "kegel");
		kegel.setAttribute("onclick", "setColor(event)");
		rij.appendChild(kegel);
	}

  //checkbox
  var rijcheckbox = document.createElement("div");
  rijcheckbox.setAttribute("id", "rijcheckbox_" + aantalrijen);
  rijcheckbox.setAttribute("class", "rijcheckbox");
  rij.appendChild(rijcheckbox);

//kegelcheckbox
  for(var kegelchecks = 0; kegelchecks < 4;kegelchecks++){
    var kegelcheck = document.createElement("div");
    kegelcheck.setAttribute("id", "kegelcheck_" + kegelchecks);
    kegelcheck.setAttribute("class", "kegelcheck");
    rijcheckbox.appendChild(kegelcheck);
  }

  mastermind.appendChild(rij);
}

//colorpicker
var colorbox = document.createElement("div");
rij.setAttribute("id", "colorbox");
for(var color = 0; color < 6;color++){
  var colorpicker = document.createElement("button");
  colorpicker.setAttribute("type", "button");
  colorpicker.setAttribute("id", "color" + color);
  colorpicker.setAttribute("class", "kegel");
	colorpicker.setAttribute("onclick", "color" + color + "()");
  mastermind.appendChild(colorpicker);
}

mastermind.appendChild(colorbox);

function setColor(event)
{
	var kleurkegels = event.target;
	if ( selectedcolor === 0) {
	kleurkegels.style.backgroundColor = colors[0];
	currentColors[kleurkegels.id[kleurkegels.id.length -1]]= colors[0];
	}
	if ( selectedcolor === 1) {
	kleurkegels.style.backgroundColor = colors[1];
	currentColors[kleurkegels.id[kleurkegels.id.length -1]]= colors[1];
	}
	if (selectedcolor === 2) {
	kleurkegels.style.backgroundColor = colors[2];
	currentColors[kleurkegels.id[kleurkegels.id.length -1]]= colors[2];
	}
	if (selectedcolor === 3) {
	kleurkegels.style.backgroundColor = colors[3];
	currentColors[kleurkegels.id[kleurkegels.id.length -1]]= colors[3];
	}
	if (selectedcolor === 4) {
	kleurkegels.style.backgroundColor = colors[4];
	currentColors[kleurkegels.id[kleurkegels.id.length -1]]= colors[4];
	}
	if (selectedcolor === 5) {
	kleurkegels.style.backgroundColor = colors[5];
	currentColors[kleurkegels.id[kleurkegels.id.length -1]]= colors[5];
	}
}




function color(event)
{
	 color = colors[0]
}
function color0(){selectedcolor = 0}
function color1(){selectedcolor = 1}
function color2(){selectedcolor = 2}
function color3(){selectedcolor = 3}
function color4(){selectedcolor = 4}
function color5(){selectedcolor = 5}

function kegelcheckbutton()
{
	for (var i = 0; i < 4; i++) {
		if(currentColors[i] === antwoord[i]){
			document.getElementById("kegelcheck_"+ i).style.backgroundColor = correctcolor;
			correct++;
		}

		else if (antwoord.includes(currentColors[i])) {
			document.getElementById("kegelcheck_"+ i).style.backgroundColor = correctwrong;
		}
		else {
			document.getElementById("kegelcheck_"+ i).style.backgroundColor = wrong;
		}
	}

	if (correct=== 4) {
		alert("you win!")
	}
	else {
		correct = 0
	}
}
