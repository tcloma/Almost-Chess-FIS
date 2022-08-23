import React from "react";
import Pawn from "./sub_components/Pawn"
import Bishop from '../components/sub_components/Bishop'
import King from '../components/sub_components/King'
import Queen from '../components/sub_components/Queen'
import Rook from '../components/sub_components/Rook'
import Knight from '../components/sub_components/Knight'

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
            // return rook component
            return <Rook />
            // return "♖" 
          case 1:
          case 6:
            //  return knight component
            return <Knight />
            // return "♘"
            
          case 2:
          case 5:
            // return bishop component
            return <Bishop xpos={xpos} ypos={ypos} />
            // return "♗"
          case 3:
            // return queen component
            return <Queen />
            // return "♕"
          case 4:
            //  return king component
            return <King />
            // return "♔"
        }
    }
   }
   return (
      <div>{currentPiece()}</div>
   )
}

export default Piece