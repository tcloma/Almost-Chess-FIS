import {pieceLogCard} from './PieceLogCard'

export default function handler(req,res) {
   const { pieceId } = req.query

   if (req.method === 'GET') {
      const piece = piece.find(
         (piece) => piece.id === parseInt(pieceId)
      )
      res.status(200).json(piece)
   } else if (req.method === 'DELETE') {
      const deletedPiece = piece.find(
         (piece) => piece.id === parseInt(pieceId)
      )
      const piece = piece.findIndex(
         (piece) => piece.id === parseInt(pieceId)
      )
      piece.splice(index, 1)
      res.status(200).json(deletedPiece)  
   }
}