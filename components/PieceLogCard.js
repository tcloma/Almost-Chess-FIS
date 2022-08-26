import React from 'react'
import styles from '../styles/PieceLog.module.scss'

const PieceLogCard = ({chessPiece}) => {
   const {x_pos , y_pos, piece_name} = chessPiece

   const deletePiece = async (pieceId) => {
      fetch(`http://localhost:9292/pieces/${pieceId}` , {
         method: 'DELETE',
      })
      const data = await res.json(data)
      fetchPieces()
   }

   return (
      <div style={{ fontFamily: 'geneva', letterSpacing: '.2em', }} className={styles.pieceLogCardContainer}>
         <div className={styles.pieceLogCard}>
            <h1>{piece_name}</h1>
            <h1>{x_pos}x{y_pos}</h1>
            <button onClick={deletePiece(piece.id)}>Delete</button>
         </div>
      </div>
   )
}

export default PieceLogCard;