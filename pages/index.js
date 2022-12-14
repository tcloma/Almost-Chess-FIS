import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chess</title>
        <meta name="description" content="Homepage" />
      </Head>

      <Layout>
        <main className={styles.main}>
          <Link href='/board'>
            <h1>Go to board</h1>
          </Link>
          <Link href='/pieceLogContainer'>
            <h1>Go to Log Moves</h1>
          </Link>
        </main>
      </Layout>
    </div>
  )
}
