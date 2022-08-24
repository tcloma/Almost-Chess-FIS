import React from 'react'

const Queen = (props) => {
  const { xpos, ypos, validMoves, setValidMoves } = props

  const maxDiagBound = (i, xpos, ypos, direction) => {
    return direction == 'right' ?
      xpos + i <= 8 && ypos + i <= 8 :
      xpos - i > 0 && ypos + i <= 8
  }
  const minDiagBound = (i, xpos, ypos, direction) => {
    return direction == 'right' ?
      xpos - i > 0 && ypos - i > 0 :
      xpos + i <= 8 && ypos - i > 0
  }

  // ITIRATING TO BOUNDARIES
  const diagBound = (xpos, ypos, direction) => {
    const allMoves = []

    // CHECKS IF LEFT OR RIGHT IS PASSED AS PARAM
    const itirationParam = (i, bound) => {
      switch (direction) {
        case 'right':
          return bound == 'max' ?
            [xpos + i, ypos + i] :
            [xpos - i, ypos - i]
        case 'left':
          return bound == 'max' ?
            [xpos - i, ypos + i] :
            [xpos + i, ypos - i]
      }
    }

    // PUSH VALID MOVES TO AN ARRAY
    for (let i = 1; maxDiagBound(i, xpos, ypos, direction); i++) {
      allMoves.push(itirationParam(i, 'max'))
    }
    for (let i = 1; minDiagBound(i, xpos, ypos, direction); i++) {
      allMoves.push(itirationParam(i, 'min'))
    }

    // RETURN COMPLETE ARRAY
    return allMoves
  }

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
    return [...diagBound(xpos, ypos, 'right'),...diagBound(xpos, ypos, 'left'),
    ...vhBoundaries(xpos,'x'),...vhBoundaries(ypos,'y')]
  }

  const handleClick = () => {
    console.log("Current pos Queen:", [xpos, ypos])
    setValidMoves(pieceMoves())
  }

  return (
    <p onClick={handleClick}>Queen</p>
  )
}

export default Queen;