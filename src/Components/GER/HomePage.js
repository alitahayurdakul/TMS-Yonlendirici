import React from 'react'
import Body from './Body';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>TMS-Websites-Router | TMS Zug Wartungsdienste Inc.</title>
        <meta http-equiv="content-language" content="de" />
        <meta
          name="description"
          content="TMS-Websites-Router | Bitte besuchen Sie unsere Website, um TMS-Websites zu sehen und TMS kennenzulernen. | TMS Zug Wartungsdienste Inc."
        />
        <meta name="keywords" content="TMS Websites Router" data-react-helmet="true" />

        <link rel="canonical" href="https://sites.tmstechnic.com/de" />
        <link rel="alternate" hreflang="tr" href="https://sites.tmstechnic.com/" />
        <link rel="alternate" hreflang="en" href="https://sites.tmstechnic.com/en" />
        <link rel="alternate" hreflang="de" href="https://sites.tmstechnic.com/de" />
        <link rel="alternate" hreflang="x-default" href="https://sites.tmstechnic.com/" />
        
      </Helmet>

      <Body />
      <Footer content="Alle Rechte vorbehalten. Hergestellt von TMS F&E." />
    </>
  )
}

export default HomePage;