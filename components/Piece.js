import React from "react";
import Pawn from "./sub_components/Pawn"
import Bishop from '../components/sub_components/Bishop'
import King from '../components/sub_components/King'
import Queen from '../components/sub_components/Queen'
import Rook from '../components/sub_components/Rook'
import Knight from '../components/sub_components/Knight'

const Piece = (props) => {
  const currentPiece = () => {
    switch (props.xpos-1) {
      case 1:
      case 6:
        // Renders pawns
        return <Pawn {...props} />
      // Pawn.new(rIndex, cIndex)
      case 0:
      case 7:
        // Renders special pieces
        switch (props.ypos-1) {
          case 0:
          case 7:
            // return rook component
            return <Rook {...props} />
          // return "♖" 
          case 1:
          case 6:
            //  return knight component
            return <Knight {...props} />
          // return "♘"

          case 2:
          case 5:
            // return bishop component
            return <Bishop {...props} />
          // return "♗"
          case 3:
            // return queen component
            return <Queen {...props} />
          // return "♕"
          case 4:
            //  return king component
            return <King {...props} />
          // return "♔"
        }
    }
  }
  return (
    <div>{currentPiece()}</div>
  )
}

export default Piece