import Head from 'next/head'
import styles from '../styles/Board.module.scss'
import Piece from '../components/Piece'
import { P1Timer, P2Timer } from '../components/Timer'
import { useState, useEffect, useRef, Children } from 'react'


const Board = () => {

  // Global Variables
  const rows = [...Array(8)]
  const columns = [...Array(8)]
  let allTiles;

  // Wait for DOM to render before fetching tiles
  const fetchTiles = async () => {
   allTiles = [...document.querySelectorAll('[tile]')]
  }
  fetchTiles()

  // States
  const [turn, setTurn] = useState('')
  const [validMoves, setValidMoves] = useState([[0, 0]])
  const [selectedPiece, setSelectedPiece] = useState([0, 0])

  // EVENT LISTENERS
  const handleTurnClick = () => {
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

  // RENDERING LOGIC
  const tileColorLogic = (cIndex, rIndex) => {
    switch (rIndex % 2) {
      case 0:
        return cIndex % 2 == 0 ? styles.coloredTile : styles.tile
      default:
        return cIndex % 2 != 0 ? styles.coloredTile : styles.tile
    }
  }

  const getValidTiles = () => {
    // Defining available tiles
    const occupiedTiles = allTiles.filter(tile => tile.firstChild.firstChild !== null)
    const occupiedTileIds = occupiedTiles.map(occupiedTile => occupiedTile.id)
    const selectedTile = allTiles.find(tile => tile.id == selectedPiece.join(''))
    // const tileChildren = allTiles.map(tile => tile.firstChild.firstChild)

    // const selectedPiece = selectedTile.firstChild.firstChild.children[1].alt

    // Conforming data to format
    const seperationIndeces = []
    for (let index = 0; index < validMoves.length; index++) {
      if (validMoves[index] === '-') {
        seperationIndeces.push(index)
      }
    }
    // console.log('Seperation Indices', seperationIndeces)

    // Seperates possible moves per axis ; Refactor to dynamically assign values to make DRYer
    const xPlusMoves = validMoves.slice(0, seperationIndeces[0])
    const xMinusMoves = validMoves.slice(seperationIndeces[0] + 1, seperationIndeces[1])
    const yPlusMoves = validMoves.slice(seperationIndeces[1] + 1, seperationIndeces[2])
    const yMinusMoves = validMoves.slice(seperationIndeces[2] + 1, seperationIndeces[3])
    const queenXPlusMove = validMoves.slice(seperationIndeces[3] + 1, seperationIndeces[4])
    const queenXMinusMove = validMoves.slice(seperationIndeces[4] + 1, seperationIndeces[5])
    const queenYPlusMove = validMoves.slice(seperationIndeces[5] + 1, seperationIndeces[6])
    const queenYMinusMove = validMoves.slice(seperationIndeces[6] + 1, seperationIndeces[7])

    // Log all seperate axis'
    // console.log('X+', xPlusMoves)
    // console.log('X-', xMinusMoves)
    // console.log('Y+', yPlusMoves)
    // console.log('Y-', yMinusMoves)
    // console.log('QueenX+',queenXPlusMove)

    // Check if a move is on an occupied tile
    const findValidMoves = (moveArr) => {
      const filteredValid = []
      for (let i = 0; i < moveArr.length; i++) {
        if (!occupiedTileIds.includes(moveArr[i].join(''))) {
          // console.log(moveArr[i])
          filteredValid.push(moveArr[i])
        }
        else {
          break;
        }
      }
      return filteredValid
    }

    const findStaticValidMoves = (moveArr) => {
      const filteredValid = []
      for (let i = 0; i < moveArr.length; i++) {
        if (!occupiedTileIds.includes(moveArr[i].join(''))) {
          // console.log(moveArr[i])
          filteredValid.push(moveArr[i])
        }
      }
      return filteredValid
    }

    const filteredMoves = [...findStaticValidMoves(validMoves.filter(move => move !== '-'))]

    // Refactor variables to make this DRYer
    const filteredMovesLong = seperationIndeces.length < 4 ? [
      ...findValidMoves(xPlusMoves),
      ...findValidMoves(xMinusMoves),
      ...findValidMoves(yPlusMoves),
      ...findValidMoves(yMinusMoves)
    ] :
      [
        ...findValidMoves(xPlusMoves),
        ...findValidMoves(xMinusMoves),
        ...findValidMoves(yPlusMoves),
        ...findValidMoves(yMinusMoves),
        ...findValidMoves(queenXPlusMove),
        ...findValidMoves(queenXMinusMove),
        ...findValidMoves(queenYPlusMove),
        ...findValidMoves(queenYMinusMove)
      ]

    const finalMoves = seperationIndeces.length == 0 ? filteredMoves : filteredMovesLong
    console.log('Valid moves:', finalMoves)
    return finalMoves
  }

  const showValidTiles = () => {
    // Remove all highlighting
    for (const tile of allTiles) {
      if (tile.classList.contains(styles.highlighted) || tile.classList.contains(styles.highlightedLight)) {
        tile.classList.remove(styles.highlighted)
        tile.classList.remove(styles.highlightedLight)
      }
    }

    // Highlight selected square
    const cHighlight = document.getElementById(`${selectedPiece.join('')}`)
    cHighlight.classList.add(styles.highlightedLight)

    // Highlights all valid moves
    for (const move of getValidTiles()) {
      document.getElementById(`${move.join('')}`).classList.add(styles.highlighted)
      // console.log(move)
    }
  }

  useEffect(() => {
    console.log("Possible Moves:", validMoves)
    showValidTiles()
  }, [validMoves])


  return (
    <>
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
                  <div
                    key={cIndex}
                    id={[cIndex + 1, rIndex + 1].join('')}
                    tile={[cIndex + 1, rIndex + 1].join('')}
                    className={tileColorLogic(cIndex, rIndex)}
                  >
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
    </>
  )
}

export default Board;