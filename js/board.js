function PCEINDEX(pce, pceNum){
	return pce*10 + pceNum;
}

var GameBoard = {};

GameBoard.pieces = new Array(BRD_SQ_NUM);
GameBoard.side = COLOURS.WHITE;

GameBoard.fiftyMove = 0; //fiftyMove (claim a draw if both ppl made 50 moves , no pawn moved , or capture move)
GameBoard.hisPly = 0; // total no. of moves made
GameBoard.enPas = 0; // En Passant Rule (When u capture a pawn which moved two steps ahead , u move as if it had only moved one step . More details:- https://www.youtube.com/watch?v=1q7lZilVy04)
GameBoard.ply = 0 ; // no. of half moves made in the search tree ? . how much done u r in the search tree , i  guess
GameBoard.castlePerm = 0; //keep track of castle Permission
GameBoard.material = new Array(2); // White,Black Material
GameBoard.pceNum = new Array(13); // no. of a piece.
GameBoard.pList = new Array(14*10); // know where piece of your board is ...
GameBoard.posKey = 0; // unique key which defines our board position ... think hashing



