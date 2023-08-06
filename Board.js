class Board{
    constructor(size){
        this.cellArr = new Array(9);
        this.sidelength = size / 18;
        this.x;
        this.y;
        for(let i = 0; i < 9; i++){
            this.cellArr[i] = new Array(9);
            for(let j = 0; j < 9; j++){
                x = width/20 + this.sidelength * i;
                y = height/15 + this.sidelength * j;
                this.cellArr[i][j] = new Cell(x, y, this.sidelength);
            }
        }
        

    }
    
    cellDetection(){
        //mouseX mouseY

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if (mouseX > this.cellArr[i][j].x && mouseX < this.cellArr[i][j].x + this.sidelength && mouseY > this.cellArr[i][j].y && mouseY < this.cellArr[i][j].y + this.sidelength){
                    //fill in numbers
                    
                }
            }
        }
    }


    drawBoard(){
        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                this.cellArr[i][j].drawCell();
                this.cellArr[i][j].showNumber();
            }
        }
    }



}