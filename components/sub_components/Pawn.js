import React from "react"


const Pawn = (props) => {
  const { xpos, ypos, validMoves, setValidMoves } = props
  // Change to let for debugging

  // ypos = 3

  // HELPER LOGIC FUNCTIONS
  const withinBounds = (ypos) => {
    const boundaries = [1, 8]
    return !boundaries.includes(ypos)
  }

  const inStartingPos = (ypos) => {
    return ypos == 2 || ypos == 6
  }

  // VALID MOVE CHECK
  const pieceMoves = () => {
    if (withinBounds(ypos) && inStartingPos(ypos)) {
      return [[xpos, ypos + 1], [xpos, ypos + 2]]
    }
    else if (withinBounds(ypos)) {
      return [[xpos, ypos + 1]]
    }
    else {
      console.log('Your piece is on a boundary')
      return [[xpos, ypos + 1]]
    }
  }

  // Return format:
  // [[1,2],[2,2],[3,3]]

  // SEND VALID MOVES BACK TO BOARD
  const handleClick = () => {
    console.log("Current pos Pawn:", [xpos, ypos])
    setValidMoves(pieceMoves())
  }

  return (
    <p onClick={handleClick}> P </p>
  )
}

export default Pawn
