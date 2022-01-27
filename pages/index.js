import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.scss'
import Favicons from '../components/Favicons/Favicons'
import Intro from '../components/Intro/Intro'
import AngledDiv from '../components/AngledDiv/AngledDiv'
import Section from '../components/Section/Section'
import FlipButton from '../components/FlipButton/FlipButton'
import 'devicon/devicon.min.css'
import Projects from '../components/Projects/Projects'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lachlan Jadezak | Portfolio</title>
        <meta name='description' content='Junior web developer based in Canberra, Australia.' key='description' />
        <Favicons />
      </Head>
      <div className={style.fixedBG} />
      <div className={style.fixedBorderTop} />
      <div className={style.fixedBorderBottom} />
      <div className={style.containerOuter}>
        <Intro />
        <main>
          <AngledDiv color={'green'} variant='top' />
          <Section color={'green'}>
            <div id='about' className={style.about}>
              <h2>
                Hi, I'm <b>Lachlan</b>
              </h2>
              <div className={style.twoCol}>
                <div className={style.profilePictureWrapper}>
                  <Image className={style.profilePicture} src='/images/profile.jpg' alt='Me playing bass' width={400} height={400} />
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
                    <FlipButton text={'Resume'} url={'/resume.pdf'} />
                    <FlipButton text={'Contact Me'} url={'#contact'} />
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <Section color={'dark'}>
            <div className={style.skills}>
              <h2>Technologies I Use</h2>
              <div className={style.techIcons}>
                <div className={style.tech}>
                  <i className='devicon-html5-plain' />
                  <p>HTML</p>
                </div>
                <div className={style.tech}>
                  <i className='devicon-sass-original' />
                  <p>SASS</p>
                </div>
                <div className={style.tech}>
                  <i className='devicon-css3-plain' />
                  <p>CSS</p>
                </div>
                <div className={style.tech}>
                  <i className='devicon-javascript-plain' />
                  <p>JavaScript</p>
                </div>
                <div className={style.tech}>
                  <i className='devicon-drupal-plain' />
                  <p>Drupal</p>
                </div>
                <div className={style.tech}>
                  <i className='devicon-php-plain' />
                  <p>PHP</p>
                </div>
                <div className={style.tech}>
                  <i className='devicon-composer-line' />
                  <p>Composer</p>
                </div>
                <div className={style.tech}>
                  <i className='devicon-docker-plain' />
                  <p>Docker</p>
                </div>
                <div className={style.tech}>
                  <i className='devicon-react-original' />
                  <p>React</p>
                </div>
                <div className={style.tech}>
                  <i className="devicon-nextjs-original-wordmark" />
                  <p>Next.js</p>
                </div>
                <div className={style.tech}>
                  <i className='devicon-git-plain' />
                  <p>Git</p>
                </div>
                <div className={style.tech}>
                  <i className='devicon-gulp-plain' />
                  <p>Gulp</p>
                </div>
                <div className={style.tech}>
                  <i className='devicon-phpstorm-plain' />
                  <p>PhpStorm</p>
                </div>
              </div>
            </div>
          </Section>
          <Section color={'green'}>
            <Projects />
          </Section>
          <Section color={'dark'} angled={false}>
            <div className={style.contact}>
              <h2>Contact Me</h2>
              <div className={style.contactFlex}>
                <div className={style.contactDetails}>
                  <ul>
                    <li>
                      <a className={style.contactItem} href='mailto:Contact@Jadezak.com'>
                        <Image className={style.invert} src='/images/email.svg' alt='Email icon' width={24} height={24} />
                        <p>Contact@Jadezak.com</p>
                      </a>
                    </li>
                    <li>
                      <a className={style.contactItem} href='https://www.linkedin.com/in/lachlanjadezak/'>
                        <Image className={style.invert} src='/images/linkedin.svg' alt='Linkedin icon' width={24} height={24} />
                        <p>Linkedin</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={style.contactImgWrapper}>
                  <Image className={style.contactImg} src='/images/phone.png' height={500} width={190} />
                </div>
              </div>
            </div>
          </Section>
        </main>
        <Footer />
      </div>
    </>
  )
}
