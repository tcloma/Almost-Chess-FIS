import styles from '../styles/timer.module.scss'
import { useTimer } from 'use-timer'
import { useEffect } from 'react'

const P1Timer = ({ turn }) => {
  const { time, status, start, pause, reset } = useTimer({
    initialTime: 100,
    timerType: 'DECREMENTAL',
  })

  useEffect(() => {
    if (turn === 'white') { { start() } }
    if (turn === 'black') { { pause() } }
  }, [turn])

  return (
    <div className={styles.timer}>
      <h1> {time} </h1>
      <h3> White timer </h3>
    </div>
  )
}

const P2Timer = ({ turn }) => {
  const { time, status, start, pause, reset } = useTimer({
    initialTime: 100,
    timerType: 'DECREMENTAL',
  })

  useEffect(() => {
    if (turn === 'black') { { start() } }
    if (turn === 'white') { { pause() } }
  }, [turn])

  return (
    <div className={styles.timer} style={{ paddingTop: '100px' }}>
      <h1> {time} </h1>
      <h3> Black Timer </h3>
    </div>
  )

}

export { P1Timer, P2Timer }