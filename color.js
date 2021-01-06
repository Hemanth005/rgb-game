
 	 var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColors();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var resetButton =document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easy-btn");
var hardBtn = document.querySelector("#hard-btn");
var numSquares = 6;

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    message.textContent = "";
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColors();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++)
    {
    	if(colors[i]){
    		squares[i].style.background = colors[i];
    	}else{
    		squares[i].style.display = "none";
    	}
    }
});
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	message.textContent = "";
	numSquares = 6;
	 colors = generateRandomColors(numSquares);
    pickedColor = pickColors();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++)
    {
    	
    		squares[i].style.background = colors[i];
    	
    		squares[i].style.display = "block";
    	
    }
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new randoom color from array
	pickedColor = pickColors();
	//change the colorDisplay to picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = colors[i];
	}
	this.textContent = "NEW COLORS";
	h1.style.background = "#232323";
	message.textContent = "";
	h1.style.background = "steelblue";

})
colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
    //initiallizing colors
	squares[i].style.background = colors[i];
	//adding click listeners
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to picked color
		//correct
		if (pickedColor === clickedColor) {
			message.textContent ="correct";
			changeColors(clickedColor);
			resetButton.textContent = "NEW GAME";
            h1.style.background = pickedColor;
		}
		//wrong
		else{
			this.style.background = "#232323";
			message.textContent ="wrong";
		}
		//function ending
			})
	//for loop ending	
}
//appling background color for squares
function changeColors(color){
	for (var i=0; i<squares.length; i++) {
	 squares[i].style.background = color;
	}
}
//picking random color for guessing

function pickColors(){
	var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}
//generating random colors
function generateRandomColors(num){
	var arr =[];
	for (var i = 0; i<num; i++) {
		arr.push(randomColor());
	}
    
    
	return arr;
}
 
 function randomColor(){
 	var r = Math.floor(Math.random() * 256);
 	var g = Math.floor(Math.random() * 256);
 	var b = Math.floor(Math.random() * 256);
 	return "rgb(" + r + ", " + g + ", " + b + ")";
 	 }