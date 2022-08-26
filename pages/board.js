import Head from 'next/head'
import styles from '../styles/Board.module.scss'
import Piece from '../components/Piece'
import { P1Timer, P2Timer } from '../components/Timer'
import { useState, useEffect, useRef, Children } from 'react'
import pieceData from '../chess_pieces'


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
  const [turn, setTurn] = useState('White')
  const [validMoves, setValidMoves] = useState([[0, 0]])
  const [selectedPiece, setSelectedPiece] = useState([0, 0])
  const [allPieces, setAllPieces] = useState(pieceData)
  const [currentPieceId, setCurrentPieceId] = useState(0)

  const clickedPiece = allPieces.find(piece => piece.id === currentPieceId)

  // EVENT LISTENERS
  const handleTurnClick = () => {
    switch (turn) {
      case '':
        setTurn('White')
        break;
      case 'White':
        setTurn('Black')
        break;
      case 'Black':
        setTurn('White')
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
    const occupiedTiles = allTiles.filter(tile => tile.firstChild !== null)
    const occupiedTileIds = occupiedTiles.map(occupiedTile => occupiedTile.id)
    const occupiedTileAlts = occupiedTiles.map(occupiedTile => occupiedTile.firstChild.children[1].alt.split('-'))

    // const selectedTile = allTiles.find(tile => tile.id == selectedPiece.join(''))
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

    const findSpecTile = (param) => {
      // console.log(param)
      const specId = occupiedTileIds.indexOf(param)
      return specId
    }

    // Check if a move is on an occupied tile
    const findValidMoves = (moveArr) => {
      // console.log('calledLong')
      // console.log(occupiedTileIds)

      const filteredValid = []
      for (let i = 0; i < moveArr.length; i++) {
        const tileId = moveArr[i].join('')
        if (!occupiedTileIds.includes(tileId)) {
          // console.log('Included: ', tileId)
          filteredValid.push(moveArr[i])
        }
        else {
          const tileId = moveArr[i].join('')
          const blockingPieceColor = occupiedTileAlts[findSpecTile(tileId)][0]
          const selectedPieceColor = clickedPiece.piece_name.split('-')[0]
          if (blockingPieceColor !== selectedPieceColor) {
            filteredValid.push(moveArr[i])
          }
          break;
        }
      }
      return filteredValid
    }

    const findStaticValidMoves = (moveArr) => {
      // console.log('called short')
      const filteredValid = []
      for (let i = 0; i < moveArr.length; i++) {
        if (!occupiedTileIds.includes(moveArr[i].join(''))) {
          // console.log(moveArr[i])
          filteredValid.push(moveArr[i])
        }
        else {
          const tileId = moveArr[i].join('')
          const blockingPieceColor = occupiedTileAlts[findSpecTile(tileId)][0]
          const selectedPieceColor = clickedPiece.piece_name.split('-')[0]
          if (blockingPieceColor !== selectedPieceColor) {
            filteredValid.push(moveArr[i])
          }
        }
      }
      return filteredValid
    }

    const finalMoves = () => {
      // console.log('Sep: ', seperationIndeces)
      if (seperationIndeces.length === 0) {
        const filteredMoves = [...findStaticValidMoves(validMoves.filter(move => move !== '-'))]
        return filteredMoves
      }
      else {
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
        return filteredMovesLong
      }
    }

    console.log('Valid moves:', finalMoves())
    return finalMoves()
  }

  // Highlight Valid tiles and make them clickable
  const showValidTiles = () => {
    const occupiedTiles = allTiles.filter(tile => tile.firstChild !== null)
    const occupiedTileIds = occupiedTiles.map(occupiedTile => occupiedTile.id)
    // const occupiedTileAlts = occupiedTiles.map(occupiedTile => occupiedTile.firstChild.children[1].alt.split('-'))
    const removeHighlight = () => {
      for (const tile of allTiles) {
        if (tile.classList.contains(styles.highlighted) || tile.classList.contains(styles.highlightedPiece) || tile.classList.contains(styles.focused)) {
          tile.classList.remove(styles.highlighted)
          tile.classList.remove(styles.highlightedPiece)
          tile.classList.remove(styles.focused)
        }
      }
    }
    removeHighlight()

    const removeListener = () => {
      for (const move of getValidTiles()) {
        document.getElementById(`${move.join('')}`).onclick = () => { }
      }
    }
    removeListener()

    // Highlight selected square
    const cHighlight = document.getElementById(`${selectedPiece.join('')}`)
    cHighlight.classList.add(styles.focused)

    // Highlights all valid moves and adds an event listener
    for (const move of getValidTiles()) {
      // Set highlighted classname bg to a grey ring if it contains a piece
      if(occupiedTileIds.includes(move.join(''))){
        document.getElementById(`${move.join('')}`).classList.add(styles.highlightedPiece)
      }
      else{
        document.getElementById(`${move.join('')}`).classList.add(styles.highlighted)
      }
      document.getElementById(`${move.join('')}`).onclick = () => {
        clearTile(currentPieceId, move[0], move[1])
        handleTurnClick()
        removeHighlight()
        removeListener()
        return false;
      }
    }
  }


  const renderPiece = (tileX, tileY) => {
    const obj = allPieces.find(piece => piece.xpos == tileX && piece.ypos == tileY);
    const spec = obj == undefined ? { id: 0, xpos: 0, ypos: 0, piece_name: "dummy piece" } : obj
    // console.log(spec.id);

    return (
      <Piece id={spec.id} xpos={spec.xpos} ypos={spec.ypos}
        name={spec.piece_name}
        setValidMoves={setValidMoves}
        setSelectedPiece={setSelectedPiece}
        setCurrentPieceId={setCurrentPieceId}
        turn={turn}
      />
    )
  }

  const clearTile = (currentPieceId, xpos, ypos) => {
    let updatedPieces = [...allPieces]
    // console.log('Compare X', piece.xpos, xpos)
    // console.log('Compare Y', piece.ypos, ypos)
    // console.log('-')
    let delId
    const filteredUpdate = updatedPieces.filter(piece => {
      if ((piece.xpos === xpos && piece.ypos === ypos) && piece.id !== currentPieceId) {
        delId = piece.id
      }
      return (
        piece.id !== delId
      )
    })
    updatePosition(currentPieceId, xpos, ypos, filteredUpdate)
  }

  const updatePosition = (id, newX, newY, arr) => {
    let updatedPieces = [...arr]
    updatedPieces.map(piece => {
      if (piece.id === id) {
        // console.log('fired')
        piece.xpos = newX
        piece.ypos = newY
      }
      return piece
    })
    setAllPieces(updatedPieces)
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
      <P1Timer turn={turn} />
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
                    {renderPiece(cIndex + 1, rIndex + 1)}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      <P2Timer turn={turn} />
    </>
  )
}

export default Board;