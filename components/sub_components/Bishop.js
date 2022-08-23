import React from "react"

const Bishop = (props) => {

  let { xpos, ypos, validMoves, setValidMoves } = props

  xpos = 6
  ypos = 8

  
  const oddOrEven = (pos1, pos2) => {
    if ((pos1 % 2 == 0 && pos2 % 2 == 0) || (pos1 % 2 != 0 && pos2 % 2 != 0)) {
      return 2
    } else {
      return 1
    }
  }
  const counter = oddOrEven(xpos, ypos)

  // HELPER LOGIC FUNCTIONS
  const diagBoundary = (xpos, ypos) => {
    // Create an array that starts with 1 value
    // For every value whole digit that both the x and y pos meet,
    // Add 2 to the array that will be itirated over

    const biggerNum = xpos > ypos ? xpos : ypos
    const diff = Math.abs(xpos - ypos)

    for (let i = 1; i < biggerNum - diff; i++) {
      counter += 2
      console.log('Add 2', counter)
      if (counter > 8) {
        counter -= 2
        console.log('Subtract 2', counter)
      }
    }

    return [...Array(counter)].length
  }


  const pieceMoves = () => {
    const allMoves = []

    diagBoundary(xpos, ypos).forEach((square, index) => {
      console.log('a')
    })

  }

  const handleClick = () => {
    console.log("Current pos:", [xpos, ypos])
    console.log(diagBoundary(xpos, ypos))
    // setValidMoves(pieceMoves())
  }

  return (
    <p onClick={handleClick}> Bishop </p>
  )
}

export default Bishop;