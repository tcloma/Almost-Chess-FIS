import styles from '../styles/timer.module.scss'
import { useTimer } from 'use-timer'
import { useEffect } from 'react'

const P1Timer = ({ turn }) => {
  const { time, start, pause, reset, status } = useTimer({
    initialTime: 100,
    timerType: 'DECREMENTAL',
    // autostart: true
  })

  useEffect(() => {
    {start}
    console.log(time)
  },[status, turn])

  return (
    <div className={styles.timer}>
      <h1> {time} </h1>
      <button onClick={start}> Start </button>
      <button onClick={pause}> Move </button>
      <button onClick={reset}> Reset </button>
    </div>
  )
}

const P2Timer = () => {
  const { time, start, pause, reset, status } = useTimer({
    initialTime: 100,
    timerType: 'DECREMENTAL',
    // autostart: true
  })

  return (
    <div className={styles.timer} style={{ paddingTop: '100px' }}>
      <h1> {time} </h1>
      <button onClick={start}> Start </button>
      <button onClick={pause}> Stop </button>
      <button onClick={reset}> Reset </button>
    </div>
  )

}

export { P1Timer, P2Timer }