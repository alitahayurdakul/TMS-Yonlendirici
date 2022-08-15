import React, { Component } from 'react';
import Pages from '../../pagesInformations.json';
import HomePart from '../HomePart/HomePart';

class Body extends Component {

  render() {
    return (
      <div className='home-body'>
        <HomePart datas={Pages.guestTR} header="MİSAFİR" content="Lütfen sayfaya gitmek için tıklayınız..." />
        <HomePart datas={Pages.portals} header="ŞİRKET" content="Lütfen sayfaya gitmek için tıklayınız..." />
      </div>
    )
  }
}
export default Body;