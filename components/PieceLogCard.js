import React from 'react'
import styles from '../styles/PieceLog.module.scss'

export const getStaticProps = async () => {
   const deletePiece = async (pieceId) => {
      //  by default this is a GET request, so we pass in an argument and set method to DELETE 
      const res = await fetch(`http://localhost:9292/pieces/${pieceId}`, {
         method: 'DELETE',
      })

      const data = await res.json()
      console.log(data)
      return {
         props: {chessPiece: data}
      }
   }
}

const PieceLogCard = ({chessPiece}) => {
   const {x_pos , y_pos, piece_name, id} = chessPiece


   return (
      <div style={{ fontFamily: 'geneva', letterSpacing: '.2em', }} className={styles.pieceLogCardContainer}>
         <div className={styles.pieceLogCard}>
            <h1>{piece_name}</h1>
            <h1>{x_pos}x{y_pos}</h1>
            <button onClick={() => deletePiece(chessPiece.id)}>Delete</button>
         </div>
      </div>
   )
}

export default PieceLogCard;