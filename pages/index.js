import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Favicons from '../components/Favicons/Favicons'
import Intro from '../components/Intro/Intro'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lachlan Jadezak | Portfolio</title>
        <meta name='description' content='Junior web developer based in Canberra, Australia.' key='description' />
        <Favicons />
      </Head>
      <main className={styles.containerOuter}>
        <div className={styles.fixedBorderTop} />
        <div className={styles.fixedBorderBottom} />
        <Intro />
        <div className={styles.containerInner}>
          <h1>Hello World!</h1>
        </div>
      </main>
    </>
  )
}
