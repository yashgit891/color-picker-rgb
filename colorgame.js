var numsquares = 6;
var colors = generaterandomcolors(numsquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");


easybtn.addEventListener("click",function(){

easybtn.classList.add("selected");
hardbtn.classList.remove("selected");
numsquares = 3;
colors = generaterandomcolors(numsquares);
pickedcolor = pickcolor();
colordisplay.textContent = pickedcolor;
h1.style.background = "steelblue";
message.textContent = "";

for(var i=0;i<squares.length;i++){
	if(colors[i]){
		squares[i].style.backgroundColor = colors[i];
	} else{
		squares[i].style.display = "none";
	}
}

});


hardbtn.addEventListener("click",function(){

hardbtn.classList.add("selected");

easybtn.classList.remove("selected");
numsquares = 6;
colors = generaterandomcolors(numsquares);
pickedcolor = pickcolor();
colordisplay.textContent = pickedcolor;
h1.style.background = "steelblue";
message.textContent = "";

for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
}

});


colordisplay.textContent = pickedcolor;

for(var i =0 ;i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedcolor = this.style.backgroundColor;
		if(clickedcolor === pickedcolor){
			message.textContent = "Correct";
			resetbutton.textContent = "play again!";
			changecolor(clickedcolor);
			h1.style.backgroundColor = clickedcolor;
		}else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try again";
		}
	});
};

function changecolor(color){

	for(var i=0 ; i<squares.length ;i++){
		squares[i].style.backgroundColor = color;
	};
}


function pickcolor(){
	var random = Math.floor(Math.random()*colors.length);

	return colors[random];
}

function generaterandomcolors(num){

	var arr = [];

	for(var i=0 ; i<num ; i++){
		arr.push(randomcolor())
	};

	return arr;

}

function randomcolor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")" ;
}

resetbutton.addEventListener("click",function(){    
	colors = generaterandomcolors(numsquares);

	pickedcolor = pickcolor();
	this.textContent = "New colors";

	colordisplay.textContent = pickedcolor;

	message.textContent = "";

	for(var i=0 ; i<squares.length ;i++){
		squares[i].style.backgroundColor = colors[i];
	};

	h1.style.background = "steelblue";
});