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
- Base piece class:
  - ~~Renders to the board~~
  - Has a position
  - Can be clicked / dragged

- Specific piece classes
  - ~~Renders the specific piece~~
  - Has data on the rules with how pieces move
  - For KING / ROOK : has rules for Castling

<br>

### Turn system & Timer
- Individual timers for each player
- Timer decrements constantly during a given players TURN
- Performing a move will end the current player's turn and will start the other player's turn
- **(Look into different timer formats commonly used in chess)**

<br>

### Move log
- POSTs every move done by each player into a database
- Displays a log of moves performed by each player

<br>

### Pregame Screen
- Options to alter the apperance of the game boad & pieces
- Be able to select from different timer styles
- Some other fun shit