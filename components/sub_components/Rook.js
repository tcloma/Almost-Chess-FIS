import React from 'react'

const Rook = (props) => {
  const { xpos, ypos, validMoves, setValidMoves } = props
  // Change to let for debugging

  // xpos = 4
  // ypos = 7

  // ITIRATING TO BOUNDARIES
  const vhBoundaries = (pos, axis) => {
    const allMoves = []

    // DEFINING BOUNDARIES
    const maxBound = (pos) => {
      return 8 - pos
    }
    const minBound = (pos) => {
      return Math.abs(1 - pos)
    }

    // CHECKS IF X AXIS OR Y AXIS IS PASSED AS PARAMETER
    const itirationParam = (index, bound) => {
      switch (axis) {
        case 'x':
          return bound == 'max' ?
            [xpos + index + 1, ypos] :
            [xpos - (index + 1), ypos]
        case 'y':
          return bound == 'max' ?
            [xpos, ypos + index + 1] :
            [xpos, ypos - (index + 1)]
      }
    }

    // PUSH VALID MOVES TO AN ARRAY
    for (let i = 0; i < maxBound(pos); i++) {
      allMoves.push(itirationParam(i, 'max'))
    }
    for (let i = 0; i < minBound(pos); i++) {
      allMoves.push(itirationParam(i, 'min'))
    }

    // RETURN COMPLETE ARRAY
    return allMoves
  }

  const pieceMoves = () => {
    return [...vhBoundaries(xpos, 'x'),...vhBoundaries(ypos, 'y')]
  }

  // SEND VALID MOVES BACK TO BOARD
  const handleClick = () => {
    console.log("Current pos Rook:", [xpos, ypos])
    setValidMoves(pieceMoves())
  }

  return (
    <p onClick={handleClick}> Rook </p>
  )
}

export default Rook;