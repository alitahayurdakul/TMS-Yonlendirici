import React from 'react'
import Body from './Body';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>TMS Websites Router | TMS Train Maintenance Services Inc.</title>
        <meta http-equiv="content-language" content="en" />
        <meta
          name="description"
          content="TMS Websites Router | Please visit to the our website to see TMS Websites and know TMS. | TMS Train Maintenance Services Inc."
        />
        <meta name="keywords" content="TMS Websites Router" data-react-helmet="true" />

        <link rel="alternate" hreflang="tr" href="https://sites.tmstechnic.com/" data-react-helmet="true" />
        <link rel="alternate" hreflang="en" href="https://sites.tmstechnic.com/en" data-react-helmet="true" />
        <link rel="alternate" hreflang="de" href="https://sites.tmstechnic.com/de" data-react-helmet="true" />
        <link rel="alternate" hreflang="x-default" href="https://sites.tmstechnic.com/" data-react-helmet="true" />
        <link rel="canonical" href="https://sites.tmstechnic.com/en" data-react-helmet="true" />
      </Helmet>

      <Body />
      <Footer content="All rights reserved. Made by TMS R&D." />
    </>
  )
}
export default HomePage;