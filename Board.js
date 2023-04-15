class Board{
    constructor(size){
        this.cellArr = new Array(9);
        let sidelength = size / 18;
        let x;
        let y;
        for(let i = 0; i < 9; i++){
            this.cellArr[i] = new Array(9);
            for(let j = 0; j < 9; j++){
                x = width/20 + sidelength * i;
                y = height/15 + sidelength * j;
                this.cellArr[i][j] = new Cell(x, y, sidelength);
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