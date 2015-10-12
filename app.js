turnCount = 0;

function player(){
   if((turnCount % 2) === 1) {
      return '<img src="http://www.trinitybc.org/vbs2010/files/horseshoe%20home.png" id="horseshoe"></img>';
   } else {
      return '<img src="http://themixnow.fm/wp-content/uploads/2013/03/Badge.png" id="sherrif"></img>';
   }
};

function Cell(value) {
   this.value = value;
   this.id = id;
   this.setState = function(input){
      this.value = input;
   };
   this.playable = true;
   this.addEventListener('click', function(){
      if (playable)
         var data = player();
         this.innerHTML = this.data;
   });
}

var drawBoard = function(){
   var row = '';
   var column = '';
   var idNum = 1;
   var boardDiv = document.getElementById('game');
   boardDiv.innerHTML = '';
   for (var r=1; r<4; r++){
      row = document.createElement('ul');
      row.className = 'row';
      row.id = 'r'+r;
      for (var c=1; c<4; c++){
         column = document.createElement('li');
         column.setAttribute('value', ' ');
         column.setAttribute('playable', true);
         column.addEventListener('click', makePlay);
         column.className = 'c'+c;
         column.id = idNum;
         column.innerHTML = ' ';
         idNum++;
         row.appendChild(column);
      } boardDiv.appendChild(row);
   }
};

function makePlay(){
   if (this.getAttribute('playable')){
   this.setAttribute('value', player());
   this.innerHTML = player();
   turnCount++;
   this.setAttribute('playable', false);
   } else {
      alert('that tile has already been chosen');
   }
   checkForMatch = function(){
      console.log('check for match');
   }
   if (turnCount>9){
      // console.log(this);
      console.log('Game over!');
      game.gameOn=false;
      var reset = document.createElement('button');
      reset.innerHTML = 'Click to try again, punk';
      document.getElementById('info').appendChild(reset);
      reset.addEventListener('click', game.start);
   }
};

function getWinner(){
   var chkMe = []
   for (var i=1; i<4; i++){
      chkMe.push(document.querySelectorAll('c'+i).getAttribute('innerHTML');
      if (chkMe[i] === chkMe)
   }
};

//    //if match across row
//    if ((board[0][0] === board[0][1] && board[0][1] === board[0][2]) ||
//       (board[1][0] === board[1][1] && board[1][1] === board[1][2]) ||
//       (board[2][0] === board[2][1] && board[2][1] === board[2][2])) {
//          this.gameOver(player);
//    }
//    //match down column
//    else if ((board[0][0] === board[1][0] && board[1][0] === board[2][0]) ||
//       (board[0][1] === board[1][1] && board[1][1] === board[2][1]) ||
//       (board[0][2] === board[1][2] && board[1][2] === board[2][2])) {
//          this.gameOver(player);
//    }
//    //diagonal match
//    else if ((board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
//    (board[0][2] === board[1][1] && board[1][1] === board[2][0])) {
//          this.gameOver(player);
//    } else {
//    gameOver = function(){
//       gameOn = 'false';
//       return player() + ' is the winner!';
//    }
// };

var game = {
   // addEventListener('click')
   gameOn: false,
   maxTurns: 9,
   start: function(){
      game.gameOn = true;
      turnCount = 1,
      document.getElementById('info').innerHTML = '';
      if (document.getElementById('start')){
         document.querySelector('.button').removeChild(button);
      }
      drawBoard();
   },
};


var button = document.getElementById('start');
button.addEventListener('click', game.start);


// var game = {
//    // addEventListener('click')
//    gameOn: false,
//    turnCount: 1,
//    maxTurns: 9,
//    start: function(){
//       document.getElementById('info').innerHTML = '';
//       this.gameOn = true;
//       drawBoard();
//       while (this.gameOn){
//          // console.log(this);
//          console.log('turnCount:' + this.turnCount)
//          this.turnCount++;
//          if (this.turnCount>this.maxTurns){
//             // console.log(this);
//             console.log('Game over!');
//             this.gameOn=false;
//          }
//       }
//    },
// };
