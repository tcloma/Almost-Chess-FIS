import React from "react";
import Pawn from "./sub_components/Pawn"

const Piece = ({xpos, ypos}) => {   
   const currentPiece = () => {
   switch (xpos) {
      case 1:
      case 6:
        // Renders pawns
        return <Pawn xpos={xpos} ypos={ypos}/>
        // Pawn.new(rIndex, cIndex)
      case 0:
      case 7:
        // Renders special pieces
        switch (ypos){
          case 0:
          case 7:
            return "♖"
          case 1:
          case 6:
            return "♘"
          case 2:
          case 5:
            return "♗"
          case 3:
            return "♕"
          case 4:
            return "♔"
        }
    }
   }
   return (
      <div>{currentPiece()}</div>
   )
}

export default Piece