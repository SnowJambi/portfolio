import React from 'react'
import Head from 'next/head'
import Favicons from '../components/Favicons/Favicons'

const FourCard = () => {
  return (
    <>
      <Head >
        <title>Frontend Mentor | Four card feature section</title>
        <link rel="stylesheet" href="/styles/four-card.css" />
        <Favicons />
      </Head>
      <h1>Reliable, efficient delivery<br/>
        <strong>Powered by Technology</strong></h1>

      <p className="about">Our Artificial Intelligence powered tools use millions of project data points
        to ensure that your project is successful</p>
      <div className="grid-container">
        <div className="col-1">
          <div className="card card-1">
            <h2>Supervisor</h2>
            <p>Monitors activity to identify project roadblocks</p>
            <img className="card-img" src="/images/four-card/icon-supervisor.svg" alt="supervisor-img"/>
          </div>
        </div>

        <div className="col-2">
          <div className="card card-2">
            <h2>Team Builder</h2>
            <p>Scans our talent network to create the optimal team for your project</p>
            <img className="card-img" src="/images/four-card/icon-team-builder.svg" alt="team-builder-img"/>
          </div>

          <div className="card card-3">
            <h2>Karma</h2>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img className="card-img" src="/images/four-card/icon-karma.svg" alt="lightbulb-img"/>
          </div>
        </div>

        <div className="col-3">
          <div className="card card-4">
            <h2>Calculator</h2>
            <p>Uses data from past projects to provide better delivery estimates</p>
            <img className="card-img" src="/images/four-card/icon-calculator.svg" alt="monitor-img"/>
          </div>
        </div>
      </div>

      <footer>
        <p className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
          Coded by <a href="https://www.jadezak.com">Lachlan Jadezak</a>.
        </p>
      </footer>
    </>
  )
}

export default FourCard