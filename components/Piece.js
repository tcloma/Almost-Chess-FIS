import React from "react";
import Pawn from "./sub_components/Pawn"

const Piece = ({xpos, ypos}) => {
   return (
      <h1>{xpos} x {ypos}</h1>
   )
}

export default Piece