import React from 'react'

const Knight = (props) => {
   const { xpos, ypos, validMoves, setValidMoves } = props

   const withinBounds = (xpos, ypos) => {
      const boundaries = [1, 8]
      return !boundaries.includes(xpos, ypos)
   }

   //   if you subtract by 2 and it not less than or equal to 0
   //   x - 2 

   // if knight positioned @ (4,4)
   let xFinal = 6;
   let yFinal = 3;
   const pieceMoves = () => {
      if (xFinal - xpos === -2) {
         if (yFinal - ypos === -1) {
            console.log('valid move')
            return 'Left Valid Move'
         }
         if (yFinal - ypos === 1) {
            console.log('valid move')
            return 'Left Valid Move'
         } else {
            console.log('invalid move')
            return 'Invalid Move'
         }
      }
      if (xFinal - xpos === -1) {
         if (yFinal - ypos === -2) {
            console.log('valid move')
            return 'Valid Move'
         }
         if (yFinal - ypos === 2) {
            console.log('valid move')
            return 'Valid Move'
         } else {
            console.log('invalid move')
            return 'Invalid Move'
         }
      }
      if (xFinal - xpos === 1) {
         if (yFinal - ypos === -2) {
            console.log('valid move')
            return 'Valid Move'
         }
         if (yFinal - ypos === 2) {
            console.log('valid move')
            return 'Valid Move'
         } else {
            console.log('invalid move')
            return 'Invalid Move'
         }
      }
      if (xFinal - xpos === 2) {
         if (yFinal - ypos === -1) {
            console.log('valid move')
            return 'Valid Move'
         }
         if (yFinal - ypos === 1) {
            console.log('valid move')
            return 'Valid Move'
         } else {
            console.log('invalid move')
            return 'Invalid Move'
         }
      }
   }

   const posibleMoves = () => {
      // if xpos is within the range then it can do this
   }

   const handleClick = () => {
      console.log('xpos', xpos, 'ypos', ypos)
      setValidMoves(pieceMoves());
   }
   return (
      <p onClick={handleClick}> Knight </p>
   )
}

export default Knight;