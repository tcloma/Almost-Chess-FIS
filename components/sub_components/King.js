import React from 'react'

const King = (props) => {
  const { xpos, ypos, validMoves, setValidMoves, setSelectedPiece } = props

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
    console.log("Current pos King:", [xpos, ypos])
    setValidMoves(pieceMoves(xpos, ypos))
    setSelectedPiece([xpos, ypos])
  }

  return (
    <p onClick={handleClick}>King</p>
  )
}

export default King;