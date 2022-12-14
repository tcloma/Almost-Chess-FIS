import React from 'react'
import Image from 'next/image'

const King = (props) => {
  let { id, xpos, ypos, name, setValidMoves, setSelectedPiece, setCurrentPieceId, turn } = props

  // xpos = 6
  // ypos = 6

  const kingMoves = (xpos, ypos) => {
    return (
      [[xpos - 1, ypos + 1],
      [xpos, ypos + 1],
      [xpos + 1, ypos + 1],
      [xpos - 1, ypos],
      [xpos + 1, ypos],
      [xpos - 1, ypos - 1],
      [xpos, ypos - 1],
      [xpos + 1, ypos - 1]]
    )
  }

  const pieceMoves = (xpos, ypos) => {
    return kingMoves(xpos, ypos).filter((move) => { { return move[0] <= 8 && move[0] >= 1 && move[1] <= 8 && move[1] > 0 } })
  }

  const handleClick = () => {
    if (turn === name.split('-')[0]) {
      console.log("Current pos King:", [xpos, ypos])
      setValidMoves(pieceMoves(xpos, ypos))
      setSelectedPiece([xpos, ypos])
      setCurrentPieceId(id)
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
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/800px-Chess_klt45.svg.png'
          height={100}
          width={100}
          alt={name}
        />
        : <Image
          onClick={handleClick}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/800px-Chess_kdt45.svg.png'
          height={100}
          width={100}
          alt={name}
        />
      }
    </>
  )
}

export default King;