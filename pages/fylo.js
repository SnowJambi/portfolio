import React from 'react'
import Head from 'next/head'

const Fylo = () => {
  return (
    <div className='fylo'>
      <Head>
        <link rel='icon' type='image/png' sizes='32x32' href='./images/favicon-32x32.png' />
        <link href='https://fonts.googleapis.com/css?family=Open+Sans|Raleway:400,700&display=swap' rel='stylesheet' />
        <link rel='stylesheet' href='styles/fylo.css' />

        <title>Frontend Mentor | Fylo landing page with two column layout</title>
      </Head>
      <nav>
        <div>
          <a href=''>
            <img className='brand' src='/images/fylo/logo.svg' alt='' />
          </a>
        </div>
        <ol className='nav-items'>
          <li className='nav-item'>
            <a href=''>Features</a>
          </li>
          <li className='nav-item'>
            <a href=''>Team</a>
          </li>
          <li className='nav-item'>
            <a href=''>Sign In</a>
          </li>
        </ol>
      </nav>

      <section className='sect1'>
        <div className='half'>
          <h1> All your files in one secure location, accessible anywhere.</h1>

          <p>Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>

          <input type='email' placeholder='Enter your email...' />
          <button type='submit'>
            <strong>Get Started</strong>
          </button>
        </div>
        <div className='half'>
          <img className='sect-img' src='/images/fylo/illustration-1.svg' alt='' />
        </div>
      </section>

      <img className='curve-img' src='/images/fylo/bg-curve-desktop.svg' alt='' />
      <div className='container'>
        <section className='sect2'>
          <div className='half'>
            <h1 className='s2-heading'>Stay productive, wherever you are</h1>

            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. </p>

            <p> Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>

            <a href='#' className='see-link'>
              See how Fylo works <i className='fas fa-arrow-alt-circle-right fa-xs' />
            </a>
            <div className='ceo'>
              <img className='quote-img' src='/images/fylo/icon-quotes.svg' alt='' />
              <p className='ceo-about'> Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
              <img className='ceo-img' src='/images/fylo/avatar-testimonial.jpg' alt='' />
              <div className='ceo-wrap'>
                <p className='ceo-name'>
                  <strong>Kyle Burton</strong>
                </p>
                <p className='ceo-creds'>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className='half'>
            <img className='sect-img' src='/images/fylo/illustration-2.svg' alt='' />
          </div>
        </section>
      </div>
      <div className='container-2'>
        <section className='sect3'>
          <div className='half'>
            <h2>Get early access today</h2>

            <p className='sect3-p'> It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
          </div>
          <div className='half'>
            <input className='input-2' type='email' placeholder='email@example.com' /> <br />
            <button type='submit'>
              <strong>Get Started For Free</strong>
            </button>
          </div>
        </section>
      </div>
      <div className='container-3'>
        <section className='sect4'>
          <a href=''>
            <img className='bottom-logo' src='/images/fylo/logo-white.svg' alt='' />
          </a>
          <div className='flex'>
            <div className='half'>
              <ul>
                <li>
                  <i className='fas fa-phone-alt contact-logo' /> Phone: +1-543-123-4567
                </li>
                <li>
                  <a href='mailto:'>
                    <i className='fas fa-envelope contact-logo' /> example@fylo.com
                  </a>
                </li>
              </ul>
            </div>
            <div className='half'>
              <ul>
                <li>
                  <a href=''>About Us</a>
                </li>
                <li>
                  <a href=''>Jobs</a>
                </li>
                <li>
                  <a href=''>Press</a>
                </li>
                <li>
                  <a href=''>Blog</a>
                </li>
              </ul>
            </div>
            <div className='half'>
              <ul>
                <li>
                  <a href=''>Contact Us</a>
                </li>
                <li>
                  <a href=''>Terms</a>
                </li>
                <li>
                  <a href=''>Privacy</a>
                </li>
              </ul>
            </div>
            <div className='half'>
              <ul>
                <a href=''>
                  <i className='fab fa-facebook-square fa-2x social-logo' />
                </a>
                <a href=''>
                  <i className='fab fa-twitter-square fa-2x social-logo' />
                </a>
                <a href=''>
                  <i className='fab fa-instagram fa-2x social-logo' />
                </a>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <p className='attribution'>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>
            Frontend Mentor
          </a>
          . Coded by <a href='https://github.com/SnowJambi/'>Lachlan Jadezak</a>.
        </p>
      </footer>
    </div>
  )
}

export default Fylo
