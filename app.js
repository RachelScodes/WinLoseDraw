//Keep score
//

//global var # of turns
var turnCount = 0;

//determin player based on turnCount
function player(){
   if((turnCount % 2) === 1) {
      //x is horseshoe
      return '<img src="http://www.trinitybc.org/vbs2010/files/horseshoe%20home.png" id="X"></img>';

      //o is sheriff's badge
   } else {
      return '<img src="http://themixnow.fm/wp-content/uploads/2013/03/Badge.png" id="O"></img>';
   }
};

//draw the game board
var drawBoard = function(){
   //initialize variables
   var row = '';
   var column = '';
   var idNum = 1;
   var boardDiv = document.getElementById('game');
   //clear board
   boardDiv.innerHTML = '';

   //draw rows as ul elements
   //add class row
   //add ind. row # for css styling
   for (var r=1; r<4; r++){
      row = document.createElement('ul');
      row.className = 'row';
      row.id = 'r'+r;

      //draw column items as empty li elements
      //add class column for css styling
      //add individual id # for matching winner
      for (var c=1; c<4; c++){
         column = document.createElement('li');
         column.className = 'c'+c;
         column.id = 'id'+idNum;

         //initialize with empty child for matching
         var empty = document.createElement('div');
         empty.id = 'empty';

         column.appendChild(empty);

         idNum++;

         //add value and playable attributes
         column.setAttribute('value', ' ');
         column.setAttribute('playable', true);

         //add click events
         column.addEventListener('click', makePlay);

         //add column tiles to row
         row.appendChild(column);
      //add row to board
      } boardDiv.appendChild(row);
   }
};

//what happens when a tile is clicked?
function makePlay(){
   //if tile is playable:
   if (this.getAttribute('playable')){
      //set inner Html to selected player
      //make tile un-playable
      this.innerHTML = player();
      this.setAttribute('playable', false);

      turnCount++;

   //if tile is NOT playable, let player choose again:
   } else {
      alert('that tile has already been chosen');
   }

   //after 4 turns check for a match:
   //earliest match can occur on 5th turn
   if (turnCount>5) {
      checkForMatch();
   }

   //if it's a draw:
   if (turnCount>9){
      end();
   }
};


//game over
function end(){
   //alerts

   //no winner
   if (turnCount>9){
      alert('It\'s a DRAW! Nobody wins kiddo');
   }

   //since turncount goes up on click,
   //we need to roll BACK one to see
   //who clicked to win
   else if (((turnCount-1) % 2) === 1) {
      //x is winner
      //x is horseshoe
      alert('Horseshoe is the winner!');

   }
   else {
      //o is winner
      //o is sheriff's badge
      alert('Sheriff is the winner!');
   }

   //reset game
   game.gameOn=false;

   //create reset button to start new game
   //without refreshing. This allows
   //for keeping score of total wins for
   //possible tournament play
   var reset = document.createElement('button');
   reset.innerHTML = 'Click to try again, punk';
   document.getElementById('info').appendChild(reset);
   reset.addEventListener('click', game.start);

}


function checkForMatch(){
   function winner(){
      if (((chkMe[0] === chkMe[1]) && (chkMe[2] === chkMe[1])) &&
  (chkMe[2] !== 'empty')) {
         //match found
         end();
      } else {
      //no match found in row
      //reset check array
      } chkMe = [];
   }

   console.log('check for match');
   var chkMe = [];
   //check columns
   for (var i=0; i<3; i++){
      chkMe.push(document.getElementById('id'+(i+1)).firstChild.getAttribute('id'));
      chkMe.push(document.getElementById('id'+(i+4)).firstChild.getAttribute('id'));
      chkMe.push(document.getElementById('id'+(i+7)).firstChild.getAttribute('id'));
      winner();
   }

   //check rows
   for (var i=0; i<9; i++){
      //get three ids at a time
      chkMe.push(document.getElementById('id'+(i+1)).firstChild.getAttribute('id'));

      //after 3, check for match
      if ((chkMe.length % 3) === 0){
         winner();
      }
   }

   //check diagonal 1
   var diag = true
   while (diag) {

      //1, 4, 9
      for (var i=1; i<10; i+=4){
         chkMe.push(document.getElementById('id'+i).firstChild.getAttribute('id'));
      }   winner();

      //7, 5, 3
      for (var i=7; i>2; i-=2){
         chkMe.push(document.getElementById('id'+i).firstChild.getAttribute('id'));
      }   winner();
      diag = false;
   }
   //no match found
   return 'draw';
};


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
