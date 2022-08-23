import React from 'react'

const Rook = (props) => {
  let { xpos, ypos, validMoves, setValidMoves } = props

  xpos = 7
  ypos = 3


  // HELPER LOGIC FUNCTIONS 
  const withinBounds = (pos) => {
    const boundaries = [1, 8]
    return !boundaries.includes(pos)
  }

  // DEFINING BOUNDARIES
  const maxBound = (pos) => {
    return [...Array(8 - pos)]
  }
  const minBound = (pos) => {
    return [...Array((1 - pos) * -1)]
  }

  // ITIRATING TO BOUNDARIES
  const toBoundaries = (pos, axis) => {
    const allMoves = []

    // CHECKS IF X AXIS OR Y AXIS IS PASSED AS PARAMETER
    const itirateToBound = (index, bound) => {
      switch (axis) {
        case 'x':
          return bound == 'max' ? [xpos + index + 1, ypos] : [xpos - (index + 1), ypos]
        case 'y':
          return bound == 'max' ? [xpos, ypos + index + 1] : [xpos, ypos - (index + 1)]
      }
    }

    // PUSH VALID MOVES TO AN ARRAY
    maxBound(pos).forEach((square, index) => {
      allMoves.push(itirateToBound(index, 'max'))
    })
    minBound(pos).forEach((square, index) => {
      allMoves.push(itirateToBound(index, 'min'))
    })

    // RETURN COMPLETE ARRAY
    return allMoves
  }

  const pieceMoves = () => {
    if (withinBounds(xpos) && withinBounds(ypos)){
      return toBoundaries(xpos, 'x').concat(toBoundaries(ypos, 'y'))
    }
    else{
      console.log('You are on a boundary')
      return toBoundaries(xpos, 'x').concat(toBoundaries(ypos, 'y'))
    }
  }

  // SEND VALID MOVES BACK TO BOARD
  const handleClick = () => {
    console.log("Current pos:", [xpos, ypos])
    setValidMoves(pieceMoves())
  }

  return (
    <p onClick={handleClick}> Rook </p>
  )
}

export default Rook;