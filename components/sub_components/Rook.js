import React from 'react'
import Image from 'next/image'
// import Add from ''

const Rook = (props) => {
  let { id, xpos, ypos, name, setValidMoves, setSelectedPiece } = props
  // Change to let for debugging

  // xpos = 7
  // ypos = 4

  // ITIRATING TO BOUNDARIES
  const vhBoundaries = (pos, axis) => {
    const allMoves = []

    // DEFINING BOUNDARIES
    const maxBound = (pos) => 8 - pos
    const minBound = (pos) => Math.abs(1 - pos)

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
    allMoves.push('-')
    for (let i = 0; i < minBound(pos); i++) {
      allMoves.push(itirationParam(i, 'min'))
    }

    // RETURN COMPLETE ARRAY
    return allMoves
  }

  const pieceMoves = () => {
    return [...vhBoundaries(xpos, 'x'),'-', ...vhBoundaries(ypos, 'y')]
  }

  // SEND VALID MOVES BACK TO BOARD
  const handleClick = () => {
    console.log("Current pos Rook:", [xpos, ypos])
    // console.log(pieceMoves())
    setValidMoves(pieceMoves())
    setSelectedPiece([xpos, ypos])
  }

  return (
    <>
      {name.split('-').includes('White') ?
        <Image
          onClick={handleClick}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/800px-Chess_rlt45.svg.png'
          height={100}
          width={100}
          alt={name}
        />
        : <Image
          onClick={handleClick}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/800px-Chess_rdt45.svg.png'
          height={100}
          width={100}
          alt={name}
        />
      }
    </>
  )
}

export default Rook;