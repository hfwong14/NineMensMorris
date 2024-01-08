
class Board {
    // Board Initilization
    constructor(){
        this.board = {
            // Board Positions
            outer: {},
            middle: {},
            inner: {},

            // Number of pieces not yet placed on the board
            availablePieceBlack: 9,     
            availablePieceWhite: 9,
        }

        // Board Position Initilization
        for (let i = 1; i <= 9; i++) {
            this.board.inner[i] = "";
            this.board.middle[i] = "";
            this.board.outer[i] = "";
        }
    }

    getBoard = () => {
        return this.board;
    }

}