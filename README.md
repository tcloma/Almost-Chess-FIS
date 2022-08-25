# Phase 3 Chess App Project

## FEATURE LIST:
- Chess board
- Chess pieces
- Turn system & Timer
- Move log
- Pre-game screen

<br>
<br>

### Chess Board
- Rendering: 
  - ~~Render 8x8 board~~
  - ~~Alternating black and white tiles~~
  - ~~Bevel / border for the board~~

- Gameplay:
  - Each tile has a coordinate value
    - a to h for horizontal
    - 1 to 8 for vertical

<br>

### Chess pieces
- Base piece component:
  - ~~Renders to the board~~
  - ~~Has a position~~
  - ~~Can be clicked~~ / dragged

- Specific piece component
  - ~~Renders the specific piece~~
  - ~~Has rules on how pieces move~~
    - ~~Define board boundaries~~
    - ~~Increment the position in a specific way until a boundary is met~~
    - Check if there is another piece in the path of the move
      - ~~If it is an ally piece, you are blocked from going futher~~
      - If it is an enemy piece, you are also blocked but you have the choice to capture the piece
  - For PAWN:
    - ~~If in starting row, can move one or two spaces~~
    - Can move diagonally only if it's a capture
  - For KNIGHT:
    - Only constriction is boundary

- Next:
  - Capturing
  - Check / Checkmate
  - Castling
  - Pawn promotes when it reaches the end
  - En passant

<br>

### Turn system & Timer
- ~~Individual timers for each player~~
- Timer decrements constantly during a given players TURN
- Performing a move will end the current player's turn and will start the other player's turn
- **(Look into different timer formats commonly used in chess)**

<br>

### Move log
- POSTs every move done by each player into a database
- Displays a log of moves performed by each player

<br>

### Pregame Screen
- Options to alter the apperance of the game board & pieces
- Be able to select from different timer styles
- Some other fun shit (maybe have checkers)