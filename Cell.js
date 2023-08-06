class Cell{
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.isMutable = true;
        this.pencilmarks = new Array();
        this.showmark = false;
        this.state = 2
        this.isMutable = true;
    }

    drawCell(){
        stroke(0)
	    strokeWeight(5)

	    fill(255)
        square(this.x, this.y, this.size)
        
    }

    cellDetect(){
        
    }

    showNumber(){
        if(this.isMutable){
            if(this.state != 0){
                textSize(35);
                strokeWeight(2);
                fill(0)
                text(this.state.toString(), this.x+this.size/2-9, this.y+this.size/2+10)

            }
            else{
                return
            }
        }
    }
}