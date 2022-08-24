import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Board.module.scss'
import Piece from '../components/Piece'
import { P1Timer, P2Timer } from '../components/Timer'
import { useState, useEffect, useRef } from 'react'


const Board = () => {

  const rows = [...Array(8)]
  const columns = [...Array(8)]

  const [turn, setTurn] = useState('')
  const [validMoves, setValidMoves] = useState([[0, 0]])
  const [selectedPiece, setSelectedPiece] = useState([0, 0])

  // EVENT LISTENERS
  const handleClick = () => {
    switch (turn) {
      case '':
        setTurn('white')
        break;
      case 'white':
        setTurn('black')
        break;
      case 'black':
        setTurn('white')
        break;
    }
  }

  const movelog = [...validMoves]

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

  const showValidTiles = () => {

    const allTiles = document.querySelectorAll('[tile]')
    for (let tile of allTiles) {
      if (tile.classList.contains(styles.highlighted) || tile.classList.contains(styles.highlightedLight)) {
        tile.classList.remove(styles.highlighted)
        tile.classList.remove(styles.highlightedLight)
      }
    }

    const cHighlight = document.getElementById(`${selectedPiece.join('')}`)
    cHighlight.classList.add(styles.highlightedLight)

    for (let move of validMoves) {
      document.getElementById(`${move.join('')}`).classList.add(styles.highlighted)
    }
  }

  useEffect(() => {
    console.log("Valid Moves:", validMoves)
    showValidTiles()
  }, [validMoves])


  return (
    <Layout>
      <Head>
        <title>Chess Board</title>
        <meta name="description" content="game-page" />
      </Head>
      {/* <P1Timer turn={turn} />
      <P2Timer turn={turn} /> */}
      <div id='00' className='00'></div>
      <div id='board' className={styles.board}>
        {rows.map((row, rIndex) => {
          return (
            <div className={styles.row} key={rIndex} row={rIndex + 1}>
              {columns.map((column, cIndex) => {
                return (
                  <div tile={[cIndex + 1, rIndex + 1].join('')} className={tileColorLogic(cIndex, rIndex)} key={cIndex} id={[cIndex + 1, rIndex + 1].join('')}>
                    <Piece
                      xpos={cIndex + 1}
                      ypos={rIndex + 1}
                      validMoves={validMoves}
                      setValidMoves={setValidMoves}
                      setSelectedPiece={setSelectedPiece}
                    />
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