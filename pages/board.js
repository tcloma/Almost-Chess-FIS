import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Board.module.scss'
import Piece from '../components/Piece'
import {P1Timer, P2Timer} from '../components/Timer'
import { useState } from 'react'


const Board = () => {

  const rows = [...Array(8)]
  const columns = [...Array(8)]

  const [turn, setTurn] = useState(true)

  // EVENT LISTENERS

  const handleClick = () => {
    setTurn(!turn)
    // console.log(turn)
  }

  // RENDERING LOGIC

  const tileColorLogic = (cIndex, rIndex) => {
    switch (rIndex % 2) {
      case 0:
        return cIndex % 2 == 0 ? styles.coloredTile : styles.tile
      default:
        return cIndex % 2 != 0 ? styles.coloredTile : styles.tile
    }
  }

  const pieceColorLogic = (rIndex) => {
    switch (rIndex) {
      case 0:
      case 1:
        return true
      case 6:
      case 7:
        return false
    }
  }

  const renderPieces = (rIndex, cIndex) => {

  }

  return (
    <Layout>
      <Head>
        <title>Chess Board</title>
        <meta name="description" content="game-page" />
      </Head>
      <P1Timer turn={turn}/>
      <P2Timer />
      <div className={styles.board}>
        {rows.map((row, rIndex) => {
          return (
            <div className={styles.row} key={rIndex} row={rIndex+1}>
              {columns.map((column, cIndex) => {
                return (
                  <div className={tileColorLogic(cIndex, rIndex)} key={cIndex} coordinate={[rIndex+1, cIndex+1]}>
                    <Piece xpos={rIndex} ypos={cIndex}/>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Board;