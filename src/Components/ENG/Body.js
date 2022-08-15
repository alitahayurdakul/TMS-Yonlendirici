import React, { Component } from 'react';
import HomePart from '../HomePart/HomePart';
import Pages from '../../pagesInformations.json';

class Body extends Component {

  render() {
    return (
      <div className='home-body'>
        <HomePart datas={Pages.guestENG} header="GUEST" content="Please click to go to the website..." />
        <HomePart datas={Pages.portals} header="COMPANY" content="Please click to go to the website..." />
      </div>
    )
  }
}
export default Body;