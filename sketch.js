var board;
function setup() 
{
	createCanvas(window.innerWidth, window.innerHeight);
	board = new Board(width / 1.2)
}



function draw()
{
	background(0, 0, 255);
	// c = color(255, 0, 0)
	// fill(c)
	board.drawBoard();


	
	

}

