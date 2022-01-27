import React from 'react'
import Head from 'next/head'
import Favicons from '../components/Favicons/Favicons'
import Script from 'next/script'

const SimonGame = () => {
  return (
    <>
      <Head>
        <title>Simon</title>
        <link rel='stylesheet' href='/styles/simon-game.css' />
        <link href='https://fonts.googleapis.com/css?family=Press+Start+2P' rel='stylesheet' />
        <Favicons />
      </Head>
      <h1 id='level-title'>Press Any Key to Start</h1>
      <div className='container'>
        <div className='row'>
          <div type='button' id='green' className='btn green' />

          <div type='button' id='red' className='btn red' />
        </div>

        <div className='row'>
          <div type='button' id='yellow' className='btn yellow' />
          <div type='button' id='blue' className='btn blue' />
        </div>
      </div>

      <Script src='https://code.jquery.com/jquery-3.4.1.min.js' strategy='beforeInteractive'/>
      <Script src='/scripts/simon-game.js' strategy='beforeInteractive'/>
    </>
  )
}

export default SimonGame
