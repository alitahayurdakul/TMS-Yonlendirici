import React from 'react'
import Body from './Body';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <>
      <Helmet>
        <meta http-equiv="content-language" content="tr" />
        <meta
          name="description"
          content="TMS Site Yönlendirici | TMS sitelerimizi görmek ve TMS'yi daha yakından tanımak için hemen sitemizi ziyaret edin. | TMS Tren Bakım Onarım A.Ş."
        />
        <title>TMS Site Yönlendirici</title>

        <meta name="keywords" content="TMS Tren Bakım Onarım" data-react-helmet="true" />

        <link rel="canonical" href="https://sites.tmstechnic.com/" />
        <link rel="alternate" hreflang="tr" href="https://sites.tmstechnic.com/" />
        <link rel="alternate" hreflang="en" href="https://sites.tmstechnic.com/en" />
        <link rel="alternate" hreflang="de" href="https://sites.tmstechnic.com/de" />
        <link rel="alternate" hreflang="x-default" href="https://sites.tmstechnic.com/" />
      </Helmet>
      <Body />
      <Footer content="Copyright © 2022 TMS Technic, Tüm Hakları Saklıdır. Made by TMS AR-GE." />
    </>
  )
}
export default HomePage;