// var player = function(){
//    if((turnCount % 2) === 1) {
//       return playerOne;
//    } else {
//       return playerTwo(value) {
//          this.value = value;
//          this.wins = '';
//       };
//    }
// };

function Cell() {
   // //new cells should be divs with class "cell"
   // //this = document.createElement('div');
   // this.className = 'cell';
   //
   // //value should be X or O if played
   // //nothing if not played yet.
   // this.value = '';
   //
   // //indicates whether cell has been played
   // this.playable = 'true';
   //
   // //changes play state of cell and sets value
   // //value is set based on player
   // this.toggle = function(player){
   //    if (player === playerOne){
   //       this.value = 'X';
   //    } else {
   //       this.value = 'O';
   //    }
   //    this.removeEventListener();
   // };
   // this.addEventListener('click', function(event){
   //    select = 'true';
   //    cellSelected.push(this);
   //    toggle();
   // }bind(this););
   //    }
   // }

}

function Board(){
   // this.addEventListener('click', function drawBoard(){
   //    ????
   // })
   // r1: ['', '', ''],
   // r2: ['', '', ''],
   // r3: ['', '', ''],
   // c1: [this.r1[0], this.r2[0], this.r3[0]],
   // c2: [this.r1[1], this.r2[1], this.r3[1]],
   // c3: [this.r1[2], this.r2[2], this.r3[2]],
   // getWinner();
   // gameOver();
}

// getWinner = function(board){
//    //if match across row
//    if ((board.r1[0] === board.r1[1] && board.r1[1] === board.r1[2]) ||
//       (board.r2[0] === board.r2[1] && board.r2[1] === board.r2[2]) ||
//       (board.r3[0] === board.r3[1] && board.r3[1] === board.r3[2])) {
//          this.gameOver(player);
//    }
//    //match down column
//    else if ((board.c1[0] === board.c1[1] && board.c1[1] === board.c1[2]) ||
//       (board.c2[0] === board.c2[1] && board.c2[1] === board.r2[2]) ||
//       (board.c3[0] === board.c3[1] && board.c3[1] === board.r3[2])) {
//          this.gameOver(player);
//    }
//    //diagonal match
//    else if ((board.r1[0] === board.r2[1] && board.r2[1] === board.r3[2]) ||
//    (board.r1[2] === board.r2[1] && board.r2[1] === board.r3[0])) {
//          this.gameOver(player);
//    } else (())
//    gameOver = function(){
//       gameOn = 'false';
//       return player() + ' is the winner!';
//    }

var game = function(){
   // addEventListener('click')
   var gameOn = false;
   var turnCount = 1;
   var board = makeBoard();
   function start(){
      gameOn = true;
      //board.render();
   }
   function getMove(){
      console.log("what's your move?")
   }

   function makeBoard(){
      return new Board();
   }

   while (gameOn){
      console.log(turnCount)
      turnCount++;
      if (turnCount>9){
         console.log('Game over!');
         gameOn=false;
      }
   }
};

game();
