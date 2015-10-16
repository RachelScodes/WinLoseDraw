//this is all hot garbage and I hate myself.
//this is all hot garbage and I hate myself.
//this is all hot garbage and I hate myself.
//this is all hot garbage and I hate myself.
//this is all hot garbage and I hate myself.

//...
//...

//HOT MONKEY GARBAGE!


//global var # of turns
var turnCount = 0;

//Keep score
var hWins = 0;
var sWins = 0;
var playTo = 0;

//cellmaker
var Cell = function(){
   this.value = '';
   this.playable = true;
   this.location = [];
   this.setState = function(){
      this.value = board.player;
   }
};

var Board = function(){
   this.cells = [];
   this.player = '';
   this.getPlayer = function(){
      (((turnCount % 2) === 1) ? this.player = 'X' : this.player = 'O');
      // if ((turnCount % 2) === 1); {
      //    this.player = 'X';
      // } else {
      //    this.player = 'O';
      // }
   };
   this.winner = function(){
      if (turnCount > 5){
         this.checkForMatch;
      } else if (turnCount > 9) {
         return 'draw';
      } else {
         return 'error';
      }
   };

}

var Game = function(){
   var board = new.Board;





}
