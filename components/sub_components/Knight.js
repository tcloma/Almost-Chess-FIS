import React from 'react'

const Knight = (props) => {
   const { xpos, ypos, validMoves, setValidMoves } = props

   const knightMoves = (xpos,ypos) => {
      return(
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

   const newArray = (xpos, ypos) => {
      console.log(
         knightMoves(xpos, ypos).filter(move => { return move[0] <= 8 && move[0] >= 1 && move[1] <= 8 && move[1] > 0})
         )
   }
      
   const handleClick = () => {
      console.log('xpos', xpos, 'ypos', ypos)
      setValidMoves(newArray(xpos, ypos));
      // setValidMoves(pieceMoves());
   }
   return (
      <p onClick={handleClick}> Knight </p>
   )
}

export default Knight;