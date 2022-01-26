import React from 'react'

const Favicons = () => {
  return (
    <>
      <link rel='apple-touch-icon' sizes='180x180' href='favicons/apple-touch-icon.png'/>
      <link rel='icon' type='image/png' sizes='32x32' href='favicons/favicon-32x32.png'/>
      <link rel='icon' type='image/png' sizes='16x16' href='favicons/favicon-16x16.png'/>
      <link rel='manifest' href='favicons/site.webmanifest'/>
      <link rel='mask-icon' href='favicons/safari-pinned-tab.svg' color='#5bbad5'/>
      <meta name='msapplication-config' content='favicons/browserconfig.xml'/>
      <meta name='msapplication-TileColor' content='#00aba9'/>
      <meta name='theme-color' content='#12161f'/>
    </>
  )
}

export default Favicons;