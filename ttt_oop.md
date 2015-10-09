# Week 2 Weekend Lab - Tic Tac Toe

Today you are going to build TicTacToe in JavaScript!

The game that you design should have the following objects:

- A Cell -> made with a constructor
- A Board -> made with a constructor
- A game -> made with an object literal

Before you begin writing code, pair up with someone and think about the game from a high level. Things to think about:

- What is Tic Tac Toe? How is it played?
- What are the nouns of the game?
- What are the verbs of the game?

For a cell:

- What information should the cell hold on to?
- What interface should you design for a cell? What should it be able to do?

For a board:

- How should it store Cell references? What would the best data structure be?
- What are the nouns of the board?
- What are the verbs of the board?
- What should happen to the board when the game starts?
- How can you determine if a play is a winning play?

For a game:

- What should the game do?
- What is the purposed of having the game object?
- What are the functions of the game object?

# The Cell

These are the minimum attributes that a cell object should have:

- a value

These are the minimum methods that a cell object should have:

- `setState`
	- should set the current value of that particular cell
- `playable`
	- should return a boolean indicating whether the cell is playable or not. If the cell already has a value that means the cell was already played and it cannot be playable anymore.

# The Board

These are the minimum attributes that a board object should have:

- a list of cells objects (an array of cell objects)
- a current player
- a winner

These are the minimum methods that a board object should have:

- `startGame`
	- should set up the board and add cells to the board
	- should set the current player
- `makePlay(position)`
	- should accept a position argument and set the value of that cell
	- should do nothing if the cell has already been played on
	- should do nothing if there is no cell at that position
- `checkWin`
	- should return a boolean value
	- should check the game board to see if the previous play was a winning play
	- **once you get this working try to refactor it to be more dry**

# The Game -> This does not have to be a constructor. Make an object literal. (**MAYBE USE THE MODULAR PATTERN?**)

These are the minimum properties of the game object:

- A board object

These are the minimum methods of the game object:

- `makeBoard`
	- should create a new board object for the game
- `start`
	- should start the game and display the current state of the board
- `play(position)`
	- should accept a single input value, a position on the game board and make a play. If the position is 0, its gonna look in the board array of cells and get the cell with the index of 0. 
	- after a play it should set the value for the cell according to the current player. EX. if player is X set that cell to X.
	- should check for a winner after each play and alert the winner if one is found


	Also, PRO-TIP: WORK WITH A PARTNER. Two heads are always better than one.