import React from "react"

const Pawn = ({xpos, ypos}) => {
   // const initialMovement = () => {
   //    // if the pawn is in starting position then it can move 1 or two spaces up
   //    if (xposition == '' && yposition == '' ) {
   //       // you can only move going up
   //       // either to go up one or to go up two spaces (only row 3 or row 4)
   //          // onClick it will show the posible movements 
   //       // else you can't move it there   
   //    }
   // }
   // const pawnMoves = () => {
   //    // once pawn does initialMovement this is the only movement it can do
   // }
   const movePawn = ((e) => {
      e.preventDefault()
      
   })
   return (
      <p onClick={movePawn}> {xpos} x {ypos}</p>
   )
}

export default Pawn
