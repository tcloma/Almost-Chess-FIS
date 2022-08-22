import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Board.module.scss'

const Board = () => {

  const rows = [...Array(8)]
  const columns = [...Array(8)]

  const tileColorLogic = (cIndex, rIndex) => {
    switch (rIndex % 2) {
      case 0:
        return cIndex % 2 == 0 ? styles.coloredTile : styles.tile
      default:
        return cIndex % 2 != 0 ? styles.coloredTile : styles.tile
    }
  }

  const renderPieces = (rIndex, cIndex) => {
    switch (rIndex) {
      case 1:
      case 6:
        // Renders pawns
        return <h1 className={styles.piece}> . </h1>
        // Pawn.new(rIndex, cIndex)
      case 0:
      case 7:
        // Renders special pieces
        return <h1 className={styles.specPiece}> . </h1>
    }
  }

  return (
    <Layout>
      <Head>
        <title>Chess Board</title>
        <meta name="description" content="game-page" />
      </Head>

      <div className={styles.board}>
        {rows.map((row, rIndex) => {
          return (
            <div className={styles.row} key={rIndex} row={rIndex+1}>
              {columns.map((column, cIndex) => {
                return (
                  <div className={tileColorLogic(cIndex, rIndex)} key={cIndex} coordinate={[rIndex+1, cIndex+1]}>
                    {renderPieces(rIndex, cIndex)}
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