import React from "react"

const Bishop = (props) => {

  const { xpos, ypos, validMoves, setValidMoves } = props

  // xpos = 4
  // ypos = 4

  // HELPER LOGIC FUNCTIONS
  const diagRight = (xpos, ypos) => {
    const allMoves = []
    for (let i = 1; i < 8; i++) {
      if (xpos + i <= 8 && ypos + i <= 8) {
        allMoves.push([xpos + i, ypos + i])
      }
    }

    for (let i = 1; i < xpos; i++) {
      if (xpos - i > 0 && ypos - i > 0)
        allMoves.push([xpos - i, ypos - i])
    }

    return allMoves
  }

  const diagLeft = (xpos, ypos) => {
    const allMoves = []
    for (let i = 1; i < 8; i++) {
      if (xpos - i > 0 && ypos + i <= 8) {
        allMoves.push([xpos - i, ypos + i])
      }

    }
    for (let i = 1; i < xpos; i++) {
      if (xpos + i <= 8 && ypos - i > 0)
        allMoves.push([xpos + i, ypos - i])
    }

    return allMoves
  }


  const pieceMoves = () => {

    return diagRight(xpos, ypos).concat(diagLeft(xpos, ypos))

  }

  const handleClick = () => {
    console.log("Current pos:", [xpos, ypos])
    // console.log(pieceMoves(xpos, ypos))
    setValidMoves(pieceMoves(xpos,ypos))
  }

  return (
    <p onClick={handleClick}> Bishop </p>
  )
}

export default Bishop;