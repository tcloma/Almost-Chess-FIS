import React from "react"

const Bishop = (props) => {

  const { xpos, ypos, validMoves, setValidMoves } = props

  // xpos = 4
  // ypos = 4
  
  // ITIRATING TO BOUNDARIES
  const diagBound = (xpos, ypos, direction) => {
    const allMoves = []
    
    // DEFINING BOUNDS
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

  const pieceMoves = () => {
    return [...diagBound(xpos, ypos, 'right'),...diagBound(xpos, ypos, 'left')]
  }

  // SEND VALID MOVES BACK TO THE BOARD
  const handleClick = () => {
    console.log("Current pos Bishop:", [xpos, ypos])
    setValidMoves(pieceMoves())
  }

  return (
    <p onClick={handleClick}> Bishop </p>
  )
}

export default Bishop;