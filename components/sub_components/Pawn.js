import React from "react"
import Image from "next/image"


const Pawn = (props) => {
  let { id, xpos, ypos, name, setValidMoves, setSelectedPiece, setCurrentPieceId, turn } = props
  // Change to let for debugging

  // ypos = 3

  // HELPER LOGIC FUNCTIONS
  const withinBounds = (ypos) => {
    const boundaries = [1, 8]
    return !boundaries.includes(ypos)
  }

  const inStartingPos = (ypos) => {
    return ypos == 2 || ypos == 7
  }

  // VALID MOVE CHECK
  const pieceMoves = () => {
    if (inStartingPos(ypos)) {
      const position = name.split('-').includes('White') ? [[xpos, ypos + 1], [xpos, ypos + 2]] : [[xpos, ypos - 1], [xpos, ypos - 2]]
      return position
    }
    else {
      const position = name.split('-').includes('White') ? [[xpos, ypos + 1]] : [[xpos, ypos - 1]]
      return position
    }
  }

  // Return format:
  // [[1,2],[2,2],[3,3]]

  // SEND VALID MOVES BACK TO BOARD
  const handleClick = () => {
    if (turn === name.split('-')[0]) {
      console.log('Current pos Pawn:', [xpos, ypos])
      setCurrentPieceId(id)
      setSelectedPiece([xpos, ypos])
      setValidMoves(pieceMoves())
    }
    else {
      console.log('Not your turn')
    }
  }

  return (
    <>
      {name.split('-').includes('White') ?
        <Image
          onClick={handleClick}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/800px-Chess_plt45.svg.png'
          height={100}
          width={100}
          alt={name}
        />
        : <Image
          onClick={handleClick}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/800px-Chess_pdt45.svg.png'
          height={100}
          width={100}
          alt={name}
        />
      }
    </>
  )
}

export default Pawn
