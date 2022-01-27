import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

const Social = () => {
  return (
    <div className='theme'>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap' rel='stylesheet' />
        <link href='styles/social/style.css' rel='stylesheet' id='theme' />

        <title>Frontend Mentor | Social Media Dashboard</title>
      </Head>
      <Script src='styles/social/index.js' strategy='beforeInteractive'/>
      <div className='header'>
        <div className='header-flex'>
          <h2>Social Media Dashboard</h2>
          <div className='button'>
            <h3>Dark Mode</h3>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round' />
            </label>
          </div>
        </div>

        <h3 id='total-followers'>Total Followers: 23,004</h3>
      </div>

      <div className='wrapper' id='stats'>
        <div className='main-container'>
          <div className='mini-border' id='facebook' />
          <div className='wrapper platform'>
            <img src='/images/social/icon-facebook.svg' />
            <p className='tag'>@nathanf</p>
          </div>
          <h1>1987</h1>
          <p className='followers'>Followers</p>
          <div className='wrapper count'>
            <img className='arrow' src='/images/social/icon-up.svg' />
            <p className='change-up'>12 Today</p>
          </div>
        </div>

        <div className='main-container'>
          <div className='mini-border' id='twitter' />
          <div className='wrapper platform'>
            <img src='/images/social/icon-twitter.svg' />
            <p className='tag'>@nathanf</p>
          </div>
          <h1>1044</h1>
          <p className='followers'>Followers</p>
          <div className='wrapper count'>
            <img className='arrow' src='/images/social/icon-up.svg' />
            <p className='change-up'>99 Today</p>
          </div>
        </div>

        <div className='main-container wrapper2'>
          <div className='mini-border' id='instagram' />
          <div className='wrapper platform'>
            <img src='/images/social/icon-instagram.svg' />
            <p className='tag'>@realnathanf</p>
          </div>
          <h1>11k</h1>
          <p className='followers'>Followers</p>
          <div className='wrapper count'>
            <img className='arrow' src='/images/social/icon-up.svg' />
            <p className='change-up'>1099 Today</p>
          </div>
        </div>

        <div className='main-container'>
          <div className='mini-border' id='youtube' />
          <div className='wrapper platform'>
            <img src='/images/social/icon-youtube.svg' />
            <p className='tag'>Nathan F.</p>
          </div>
          <h1>8239</h1>
          <p className='followers'>Subscribers</p>
          <div className='wrapper count'>
            <img className='arrow' src='/images/social/icon-down.svg' />
            <p className='change-down'>144 Today</p>
          </div>
        </div>
      </div>

      <h2 id='overview'>Overview - Today</h2>

      <div className='wrapper'>
        <div className='sub-container'>
          <div className='wrapper overview'>
            <h3>Page Views</h3>
            <img src='/images/social/icon-facebook.svg' alt='facebook-logo' />
          </div>
          <div className='wrapper overview'>
            <h2>87</h2>
            <div className='wrapper count'>
              <img className='arrow' src='/images/social/icon-up.svg' />
              <p className='change-up'>3%</p>
            </div>
          </div>
        </div>

        <div className='sub-container'>
          <div className='wrapper overview'>
            <h3>Likes</h3>
            <img src='/images/social/icon-facebook.svg' alt='facebook-logo' />
          </div>
          <div className='wrapper overview'>
            <h2>52</h2>
            <div className='wrapper count'>
              <img className='arrow' src='/images/social/icon-down.svg' />
              <p className='change-down'>2%</p>
            </div>
          </div>
        </div>

        <div className='sub-container'>
          <div className='wrapper overview'>
            <h3>Likes</h3>
            <img src='/images/social/icon-instagram.svg' alt='instagram-logo' />
          </div>
          <div className='wrapper overview'>
            <h2>5462</h2>
            <div className='wrapper count'>
              <img className='arrow' src='/images/social/icon-up.svg' />
              <p className='change-up'>2257%</p>
            </div>
          </div>
        </div>

        <div className='sub-container'>
          <div className='wrapper overview'>
            <h3>Profile Views</h3>
            <img src='/images/social/icon-instagram.svg' alt='instagram-logo' />
          </div>
          <div className='wrapper overview'>
            <h2>52k</h2>
            <div className='wrapper count'>
              <img className='arrow' src='/images/social/icon-up.svg' />
              <p className='change-up'>1375%</p>
            </div>
          </div>
        </div>
      </div>

      <div className='wrapper'>
        <div className='sub-container'>
          <div className='wrapper overview'>
            <h3>Retweets</h3>
            <img src='/images/social/icon-twitter.svg' alt='twitter-logo' />
          </div>
          <div className='wrapper overview'>
            <h2>117</h2>
            <div className='wrapper count'>
              <img className='arrow' src='/images/social/icon-up.svg' />
              <p className='change-up'>303%</p>
            </div>
          </div>
        </div>

        <div className='sub-container'>
          <div className='wrapper overview'>
            <h3>Likes</h3>
            <img src='/images/social/icon-twitter.svg' alt='twitter-logo' />
          </div>
          <div className='wrapper overview'>
            <h2>507</h2>
            <div className='wrapper count'>
              <img className='arrow' src='/images/social/icon-up.svg' />
              <p className='change-up'>553%</p>
            </div>
          </div>
        </div>

        <div className='sub-container'>
          <div className='wrapper overview'>
            <h3>Likes</h3>
            <img src='/images/social/icon-youtube.svg' alt='youtube-logo' />
          </div>
          <div className='wrapper overview'>
            <h2>107</h2>
            <div className='wrapper count'>
              <img className='arrow' src='/images/social/icon-down.svg' />
              <p className='change-down'>19%</p>
            </div>
          </div>
        </div>

        <div className='sub-container'>
          <div className='wrapper overview'>
            <h3>Total Views</h3>
            <img src='/images/social/icon-youtube.svg' alt='youtube-logo' />
          </div>
          <div className='wrapper overview'>
            <h2>1407</h2>
            <div className='wrapper count'>
              <img className='arrow' src='/images/social/icon-down.svg' />
              <p className='change-down'>12%</p>
            </div>
          </div>
        </div>
      </div>

      <div className='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>
          Frontend Mentor
        </a>
        . Coded by <a href='https://www.jadezak.com'>Lachlan Jadezak</a>.
      </div>
    </div>
  )
}

export default Social
