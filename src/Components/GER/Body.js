import React, { Component } from 'react';
import HomePart from '../HomePart/HomePart';
import Pages from '../../pagesInformations.json';

class Body extends Component {

  render() {
    return (
      <div className='home-body'>
        <HomePart datas={Pages.guestDE} header="GAST" content="Bitte klicken, um zur Website zu gelangen" />
        <HomePart datas={Pages.portals} header="GESELLSCHAFT" content="Bitte klicken, um zur Website zu gelangen" />
      </div>
    )
  }
}
export default Body;