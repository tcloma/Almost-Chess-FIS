import React from "react";
import Pawn from "./sub_components/Pawn"
import Bishop from '../components/sub_components/Bishop'
import King from '../components/sub_components/King'
import Queen from '../components/sub_components/Queen'
import Rook from '../components/sub_components/Rook'
import Knight from '../components/sub_components/Knight'

const Piece = (props) => {

  // console.log(piece)

  const currentPiece = () => {
    const splitName = props.name.split('-')
    if (splitName.includes('Pawn')) {
      return <Pawn {...props} />
    }
    else if (splitName.includes('Rook')) {
      return <Rook {...props} />
    }
    else if (splitName.includes('Knight')){
      return <Knight {...props} />
    }
    else if (splitName.includes('Bishop')){
      return <Bishop {...props} />
    }
    else if (splitName.includes('Queen')){
      return <Queen {...props} />
    }
    else if (splitName.includes('King')){
      return <King {...props} />
    }
    else{
      return null
    }
  }

  return (
    <>{currentPiece()}</>
  )
}

export default Piece