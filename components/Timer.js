import styles from '../styles/utils.module.scss'
import { useTimer } from 'use-timer'
import { useEffect } from 'react'

const P1Timer = ({ turn }) => {
  const { time, status, start, pause, reset } = useTimer({
    initialTime: 300,
    timerType: 'DECREMENTAL',
  })

  useEffect(() => {
    if (time > 0) {
      if (turn === 'White') { { start() } }
      if (turn === 'Black') { { pause() } }
    }
    else {
      { pause() }
    }

  }, [turn, time])

  const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }

  return (
    <div className={styles.timer}>
      <h1> {fmtMSS(time)} </h1>
      <h3> White timer </h3>
    </div>
  )
}

const P2Timer = ({ turn }) => {
  const { time, status, start, pause, reset } = useTimer({
    initialTime: 300,
    timerType: 'DECREMENTAL',
  })

  useEffect(() => {
    if (time > 0) {
      if (turn === 'Black') { { start() } }
      if (turn === 'White') { { pause() } }
    }
    else {
      { pause(0) }
    }
  }, [turn, time])

  const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }

  return (
    <div className={styles.timer}>
      <h1> {fmtMSS(time)} </h1>
      <h3> Black Timer </h3>
    </div>
  )

}

export { P1Timer, P2Timer }