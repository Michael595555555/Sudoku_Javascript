class Cell{
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.isMutable = true;
        this.pencilmarks = new Array();
        this.showmark = false;
        this.state = 0
        this.isMutable = true;
    }

    drawCell(){
        stroke(0)
	    strokeWeight(5)

	    fill(255)
        square(this.x, this.y, this.size)
        
    }

    showNumber(){
        if(this.isMutable){
            if(this.state != 0){
                text(this.state.toString(), this.x, this.y)
            }
            else{
                textSize(35);
                strokeWeight(2);
                fill(0)
                text('0', this.x+this.size/2-7, this.y+this.size/2+10)

            }
        }
    }
}