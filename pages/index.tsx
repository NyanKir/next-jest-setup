
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jest</title>
        <meta name="description" content="Jest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button>
          Click me! Please
        </Button>
      </main>

    </div>
  )
}

export default Home
