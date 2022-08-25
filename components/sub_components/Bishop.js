import React from "react"
import Image from "next/image"

const Bishop = (props) => {

  let { id, xpos, ypos, name, setValidMoves, setSelectedPiece } = props

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
    allMoves.push('-')
    for (let i = 1; minDiagBound(i, xpos, ypos, direction); i++) {
      allMoves.push(itirationParam(i, 'min'))
    }

    // RETURN COMPLETE ARRAY
    return allMoves
  }

  const pieceMoves = () => {
    return [...diagBound(xpos, ypos, 'right'),'-',...diagBound(xpos, ypos, 'left')]
  }

  // SEND VALID MOVES BACK TO THE BOARD
  const handleClick = () => {
    console.log("Current pos Bishop:", [xpos, ypos])
    setValidMoves(pieceMoves())
    setSelectedPiece([xpos,ypos])
  }

  return (
    <>
      {name.split('-').includes('White') ?
        <Image
          onClick={handleClick}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/800px-Chess_blt45.svg.png'
          height={100}
          width={100}
          alt='{name}'
        />
        : <Image
          onClick={handleClick}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/800px-Chess_bdt45.svg.png'
          height={100}
          width={100}
          alt='{name}'
        />
      }
    </>
  )
}

export default Bishop;