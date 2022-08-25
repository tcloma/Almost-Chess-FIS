import React from 'react'
import Image from 'next/image'

const Knight = (props) => {
  const { xpos, ypos, validMoves, setValidMoves, setSelectedPiece } = props

  const knightMoves = (xpos, ypos) => {
    return (
      [[xpos - 2, ypos - 1],
      [xpos - 2, ypos + 1],
      [xpos - 1, ypos - 2],
      [xpos - 1, ypos + 2],
      [xpos + 1, ypos - 2],
      [xpos + 1, ypos + 2],
      [xpos + 2, ypos - 1],
      [xpos + 2, ypos + 1]]
    )
  }

  const pieceMoves = (pos1, pos2) => {
    return knightMoves(pos1, pos2).filter(move => { return move[0] <= 8 && move[0] >= 1 && move[1] <= 8 && move[1] > 0 })
  }

  const handleClick = () => {
    console.log('xpos', xpos, 'ypos', ypos)
    setValidMoves(pieceMoves(xpos, ypos))
    setSelectedPiece([xpos,ypos])
  }

  return (
    <>
      {ypos == 1 ?
        <Image
          onClick={handleClick}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/800px-Chess_nlt45.svg.png'
          height={100}
          width={100}
          alt='white-knight'
        />
        : <Image
          onClick={handleClick}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/800px-Chess_ndt45.svg.png'
          height={100}
          width={100}
          alt='black-knight'
        />
      }
    </>
  )
}

export default Knight;