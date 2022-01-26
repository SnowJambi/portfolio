import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.scss'
import Favicons from '../components/Favicons/Favicons'
import Intro from '../components/Intro/Intro'
import AngledDiv from '../components/AngledDiv/AngledDiv'
import Section from '../components/Section/Section'
import FlipButton from '../components/FlipButton/FlipButton'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lachlan Jadezak | Portfolio</title>
        <meta name='description' content='Junior web developer based in Canberra, Australia.' key='description' />
        <Favicons />
      </Head>
      <div className={style.fixedBG} />
      <main className={style.containerOuter}>
        <div className={style.fixedBorderTop} />
        <div className={style.fixedBorderBottom} />
        <Intro />
        <AngledDiv color={'green'} variant='top' />
        <Section color={'green'}>
          <div className={style.about}>
            <h1>
              Hi, I'm <strong>Lachlan</strong>
            </h1>
            <div className={style.twoCol}>
              <div className={style.profilePictureWrapper}>
                <Image className={style.profilePicture} src='/images/profile.jpg' alt='Me playing bass' width={400} height={400}/>
              </div>
              <div className='summary'>
                <p>I'm an eager frontend developer based in Canberra, doing my best to keep up with and learn the latest technologies in the rapidly advancing world of web development.</p>

                <p>
                  You can probably find me brushing up on my JavaScript skills on codewars, following courses to learn new skills, or reading as much as I can about the current frontend landscape
                  (someone send help, there's like 50 chrome tabs open about JavaScript frameworks).
                </p>

                <p>
                  I have completed a Certificate IV in Programming at Canberra Institute of Technology which has given me some experience in working with SQL, C++, Java, and broader programming
                  principles such as those of Object Oriented Programming. The course also taught a little about project management and development methodologies such as Agile.
                </p>

                <p>If I'm not working I'm probably playing some bass guitar, out riding my motorbike or sitting back watching the MotoGP with an IPA.</p>
                <div className='buttons' style={{ marginTop: '40px' }}>
                  <FlipButton text={'Resumé'} url={'/resume.pdf'} />
                  <FlipButton text={'Contact Me'} url={'#contact'} />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  )
}
