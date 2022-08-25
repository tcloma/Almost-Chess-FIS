import React from "react"
import PieceLogCard from './PieceLogCard'

const PieceLog = () => {
   const [pieceLog, setPieceLog] = useState([])

   useEffect(() => {
      // your localhost with route goes in here 
      fetch('http://localhost:9292/pieces')
      .then((res) => res.json)
      .then(piece => setPieceLog([piece]))
   } , [])

   // const aFunctionthatTiesEachPieceTogether = (() => {
   //    if this piece has xpos = x_pos and ypos = y_pos
   //    then this piece is associated to that id (forever!!!) 
   //    (backend) piece.xpos = xpos (frontend)
   // })

   return (
      <div>
         {
            pieceLog.map((chessPiece) => {
               return <PieceLogCard key={chessPiece.id} props={chessPiece}  />
            })
         }
      </div>
   )
}
export default PieceLog;