import React from 'react'
import styles from '../styles/PieceLog.module.scss'

const PieceLogCard = ({chessPiece}) => {
   const {x_pos , y_pos, piece_name} = chessPiece
   return (
      <div style={{ fontFamily: 'geneva', letterSpacing: '.2em', }} className={styles.pieceLogCardContainer}>
         <div className={styles.pieceLogCard}>
            <h1>{piece_name}</h1>
            <h1>{x_pos}x{y_pos}</h1>
            <button onClick={handleDelete}>Delete</button>
         </div>
      </div>
   )
}

export default PieceLogCard;