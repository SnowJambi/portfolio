import React from 'react'
import Head from 'next/head'

const Tindog = () => {
  return (
    <>
      <Head>
        <title>TinDog</title>
        <link href='https://fonts.googleapis.com/css?family=Montserrat:300,400,900|Ubuntu&display=swap' rel='stylesheet' />
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
          integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'
          crossOrigin='anonymous'
        />
        <link rel='stylesheet' href='/styles/tindog.css' />
        <script src='https://code.jquery.com/jquery-3.4.1.slim.min.js' integrity='sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n' crossOrigin='anonymous' />
        <script
          src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'
          integrity='sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo'
          crossOrigin='anonymous'
        />
        <script
          src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js'
          integrity='sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6'
          crossOrigin='anonymous'
        />

        <script src='https://kit.fontawesome.com/caf8b7f6c2.js' crossOrigin='anonymous' />
      </Head>
      <section id='title'>
        <div className='container-fluid title-cont'>
          <nav className='navbar navbar-expand-lg navbar-dark'>
            <a className='navbar-brand' href='#'>
              tindog
            </a>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarToggle'>
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarToggle'>
              <div className='navbar-nav ml-auto'>
                <a className='nav-link nav-item' href='#footer'>
                  Contact
                </a>
                <a className='nav-link nav-item' href='#pricing'>
                  Pricing
                </a>
                <a className='nav-link nav-item' href='#footer'>
                  Download
                </a>
              </div>
            </div>
          </nav>

          <div className='row title-row'>
            <div className='col-lg-6'>
              <h1 id='meet-heading'>Meet new and interesting dogs nearby.</h1>
              <button type='button' className='btn btn-dark btn-lg btn-title'>
                <i className='fab fa-apple' /> Download
              </button>
              <button type='button' className='btn btn-outline-light btn-lg btn-title'>
                <i className='fab fa-google-play' />
                Download
              </button>
            </div>
            <div className='col-lg-6'>
              <img className='img-fluid phone-img d-block' src='/images/tindog/iphone6.png' alt='iphone-mockup' />
            </div>
          </div>
        </div>
      </section>

      <section id='features'>
        <div className='row'>
          <div className='col-lg-4 col-feat'>
            <i className='fa-col1 fas fa-check-circle fa-5x' />
            <h3>Easy to use.</h3>
            <p>So easy to use, even your dog could do it.</p>
          </div>
          <div className='col-lg-4 col-feat'>
            <i className='fa-col1 fas fa-bullseye fa-5x' />
            <h3>Elite Clientele</h3>
            <p>We have all the dogs, the greatest dogs.</p>
          </div>
          <div className='col-lg-4 col-feat'>
            <i className='fa-col1 fas fa-heart fa-5x' />
            <h3>Guaranteed to work.</h3>
            <p>Find the love of your dog's life or your money back.</p>
          </div>
        </div>
      </section>

      <section id='testimonials'>
        <div id='testimonial-carousel' className='carousel slide' data-ride='carousel'>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <h2 className='testimonial-text'>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
              <img className='testimonial-image' src='/images/tindog/dog-img.jpg' alt='dog-profile' />
              <em>Pebbles, New York</em>
            </div>
            <div className='carousel-item'>
              <h2 className='testimonial-text'>My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
              <img className='testimonial-image' src='/images/tindog/lady-img.jpg' alt='lady-profile' />
              <em>Beverly, Illinois</em>
            </div>
          </div>
          <a className='carousel-control-prev' href='#testimonial-carousel' role='button' data-slide='prev'>
            <span className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='sr-only'>Previous</span>
          </a>
          <a className='carousel-control-next' href='#testimonial-carousel' role='button' data-slide='next'>
            <span className='carousel-control-next-icon' aria-hidden='true' />
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </section>

      <section id='press'>
        <img className='press-img' src='/images/tindog/techcrunch.png' alt='tc-logo' />
        <img className='press-img' src='/images/tindog/tnw.png' alt='tnw-logo' />
        <img className='press-img' src='/images/tindog/bizinsider.png' alt='biz-insider-logo' />
        <img className='press-img' src='/images/tindog/mashable.png' alt='mashable-logo' />
      </section>

      <section id='pricing'>
        <div className='container'>
          <h2 className='pricing-h2'>A Plan for Every Dog's Needs</h2>
          <p className='pricing-p'>Simple and affordable price plans for your and your dog.</p>

          <div className='card-deck'>
            <div className='card text-center'>
              <h3 className='card-header'>Chihuahua</h3>
              <div className='card-body'>
                <h2 className='card-title'>Free</h2>
                <p>5 Matches Per Day</p>
                <p>10 Messages Per Day</p>
                <p>Unlimited App Usage</p>
              </div>
              <div className='card-footer'>
                <button className='btn btn-outline-dark btn-block' type='button card-footer'>
                  Sign Up
                </button>
              </div>
            </div>

            <div className='card text-center'>
              <h3 className='card-header'>Labrador</h3>
              <div className='card-body'>
                <h2 className='card-title'>$49 / mo</h2>
                <p>Unlimited Matches</p>
                <p>Unlimited Messages</p>
                <p>Unlimited App Usage</p>
              </div>
              <div className='card-footer'>
                <button className='btn btn-dark btn-block' type='button'>
                  Sign Up
                </button>
              </div>
            </div>

            <div className='card text-center'>
              <h3 className='card-header'>Mastiff</h3>
              <div className='card-body'>
                <h2 className='card-title'>$99 / mo</h2>
                <p>Pirority Listing</p>
                <p>Unlimited Matches</p>
                <p>Unlimited Messages</p>
                <p>Unlimited App Usage</p>
              </div>
              <div className='card-footer'>
                <button className='btn btn-dark btn-block' type='button'>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='cta'>
        <h3 className='cta-h3'>Find the True Love of Your Dog's Life Today.</h3>
        <button type='button' className='btn btn-dark btn-lg btn-title'>
          <i className='fab fa-apple' /> Download
        </button>
        <button type='button' className='btn btn-outline-light btn-lg btn-title'>
          <i className='fab fa-google-play' />
          Download
        </button>
      </section>

      <footer id='footer'>
        <i className='f-icon fab fa-twitter' />
        <i className='f-icon fab fa-facebook-f' />
        <i className='f-icon fab fa-instagram' />
        <i className='f-icon fas fa-envelope' />
        <p>© Copyright 2018 TinDog</p>
      </footer>
    </>
  )
}

export default Tindog
