import React from "react"

const Pawn = (props) => {
  let { xpos, ypos, validMoves, setValidMoves } = props

  xpos = 8

  // HELPER LOGIC FUNCTIONS
  const withinBounds = (xpos) => {
    const boundaries = [1, 8]
    return !boundaries.includes(xpos)
  }

  const inStartingPos = (xpos) => {
    return xpos == 2 || xpos == 6
  }

  // VALID MOVE CHECK
  const pieceMoves = () => {
    if (withinBounds(xpos) && inStartingPos(xpos)) {
      return [[xpos + 1, ypos], [xpos + 2, ypos]]
    }
    else if (withinBounds(xpos)) {
      return [[xpos + 1, ypos]]
    }
    else {
      return "Can not move piece outside of boundary"
    }
  }

  // Return format:
  // [[1,2],[2,2],[3,3]]

  // SEND VALID MOVES BACK TO BOARD
  const handleClick = () => {
    console.log("Current pos:", [xpos, ypos])
    setValidMoves(pieceMoves())
  }

  return (
    <p onClick={handleClick}> P </p>
  )
}

export default Pawn
