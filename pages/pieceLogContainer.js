import React , {useState , useEffect} from 'react'
import PieceLog from '../components/PieceLog'
import styles from '../styles/PieceLog.module.scss'

export const getStaticProps = async() => {

   const res = await fetch('http://localhost:9292/pieces')
   const data = await res.json()

   return {
      props: {chessPiece: data}
   }
}

const pieceLogContainer = ({chessPiece}) => {

   // whenever the pice makes a move it will log that move 
   return(
      <div>
         <PieceLog chessPiece={chessPiece}/>
      </div>
   )
}

export default pieceLogContainer;