//Holds player vehicle
var car;
var parkingSpot;
//Holds obstacle vehicles
var traff = [];
//Size of grid spacing
var grid = 50;
var gameStarted = false;
var timeValue = 0;
var timeInterval;


// p5js setup function, ran on page load
function setup() {
	createCanvas(500,500);
	resetGame();
	//Parking spots aka "finish line"
	parkingSpot = new Traffic(0, 0, width, grid, 0, [99, 4, 4]);
	var index = 0;
	
	//Create traffic obstacles
	//First row
	for(var i =0; i<2; i++){
		var x = i * 200;
		traff[index] = new Traffic(x, height-grid*3, grid*2, grid, 2, [4, 144, 20]);
		index++;
	}
	//Second row
	for(var i =0; i<3; i++){
		var x = i * 120 +100;
		traff[index] = new Traffic(x, height-grid*4, grid, grid, 4.2, [180, 22, 8]);
		index++;
	}
	//Third row
	for(var i =0; i<2; i++){
		var x = i * 50 +10;
		traff[index] = new Traffic(x, height-grid*5, grid/2, grid/4, -0.5, [252, 190, 108]);
		index++;
	}
	//Fourth row
	for(var i =0; i<2; i++){
		var x = i * 70 +5;
		traff[index] = new Traffic(x, height-grid*5.5, grid/2, grid/4, 1, [252, 190, 108]);
		index++;
	}
	//Fifth row
	for(var i =0; i<2; i++){
		var x = i * 70 +5;
		traff[index] = new Traffic(x, height-grid*5.76, grid/2, grid/4, 1, [252, 190, 108]);
		index++;
	}
	//Sixth row
	for(var i =0; i<2; i++){
		var x = i * 80;
		traff[index] = new Traffic(x, height-grid*7, grid, grid, -3, [4, 50, 200]);
		index++;
	}
	//Seventh row
	for(var i =0; i<3; i++){
		var x = i * 100 +150;
		traff[index] = new Traffic(x, height-grid*8, grid*1.25, grid, -1.8, [180, 22, 200]);
		index++;
	}
	//Parked vehicles 
	traff[index] = new Traffic(width-grid*1.4, height-grid*10, grid*1.25, grid*2, 0, [2, 130 , 10]);
	index++;
	traff[index] = new Traffic(width/2-grid, height-grid*10, grid*1.3, grid*2-10, 0, [0, 50 , 150]);
	index++;
	traff[index] = new Traffic(grid*2-25, height-grid*10, grid, grid*1.15, 0, [249, 62, 0]);
	index++;
	traff[index] = new Traffic(5, height-grid*10, grid, grid*2, 0, [245, 249, 0]);
	index++;
	traff[index] = new Traffic(grid*6-25, height-grid*10, grid, grid*1.25, 0, [122, 0, 188]);
	index++;
	
}

// p5js draw function, ran on every frame.
function draw() {
	background(0);
	parkingSpot.show();
	fill(215,80);
	rect(0, height-grid, width, grid);
	fill(0);
	rect(width/2-grid*2.5, height-grid, grid*2, grid);
	rect(width/2+grid*0.5, height-grid, grid*2, grid);
	rect(width/2+grid*0.5, height-grid, grid*2, grid);
	car.show();
	
	for (var i= 0; i<21; i++){
		traff[i].update();
		traff[i].show();
		if(car.intersects(traff[i])){ 
			window.clearInterval(timeInterval);
			resetGame();
			console.log("GAME OVER");}
		if(car.intersects(parkingSpot)){
			endGame();}
	}

	textSize(32);
	fill(255);
	text(timeValue, width-60, 30);
	text("Time:", width-150, 30);
}
//Starts game
function resetGame() {
	car = new Car(width/2 + grid, height-grid, grid-6, grid);
	
	
	gameStarted = false;
}

//End game sequence
function endGame(bool){
	console.log("~ WINNER ~");
	window.alert("Nice Job!\n\nYou took " + timeValue + " seconds to park");
	window.clearInterval(timeInterval);
	resetGame();
}

// p5js key pressed function, runs when any key is pressed on the keyboard
// while the game is open.
function keyPressed() {
	if(keyCode === UP_ARROW) {
		//Start timer as soon as first move is made
		if(!gameStarted){
			startTimer();
			gameStarted = true;
			}
		car.move(0, -grid);
} 	else if(keyCode === DOWN_ARROW) {
		car.move(0, grid);
}	else if(keyCode === LEFT_ARROW) {
		car.move(-grid, 0);
}   else if(keyCode === RIGHT_ARROW) {
		car.move(grid, 0);
  }
}

//Functions for time value
function startTimer() {
    timeValue = 0;
    timeInterval=window.setInterval(onTimerTick, 1000);
}

function onTimerTick() {
    timeValue++;
    updateTimer();
}
