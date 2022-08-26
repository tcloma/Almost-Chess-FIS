import React , {useState , useEffect} from "react"
import PieceLogCard from './PieceLogCard'
import styles from '../styles/PieceLog.module.scss'


const PieceLog = ({chessPiece}) => {
   return (
      <div className={styles.chessPiece}>
         {
            chessPiece.map((chesspiece) => {
               return <PieceLogCard key={chesspiece.id} chessPiece={chesspiece}/>
            })
         }
      </div>
   )
}
export default PieceLog;