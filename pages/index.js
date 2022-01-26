import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Favicons from '../components/Favicons/Favicons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lachlan Jadezak | Portfolio</title>
        <meta name='description' content='Junior web developer based in Canberra, Australia.' key='description' />
        <Favicons />
      </Head>
      <div className={styles.containerOuter}>
        <div className={styles.containerInner}>
          <main className={styles.main}>
            <h1 className={styles.title}>Hello World!</h1>
          </main>
        </div>
      </div>
    </>
  )
}
