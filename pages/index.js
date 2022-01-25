import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Favicons from "../components/Favicons/Favicons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lachlan Jadezak | Portfolio</title>
        <meta name="description" content="Junior web developer based in Canberra, Australia." />
        <Favicons />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello World!
        </h1>
      </main>
    </div>
  )
}
