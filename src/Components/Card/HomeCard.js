import React, { Component } from 'react';
import '../../Images/tmsOnboard.PNG';
import '../../Images/tmsArge.PNG';
import '../../Images/tmsEdirneLoko.PNG';
import '../../Images/tmsLokomotive.png';
import '../../Images/tmsMotor.PNG';
import '../../Images/tmsPortal.PNG';
import '../../Images/tmsRubber.PNG';
import '../../Images/tmsTechnic.PNG';

class HomeCard extends Component {

    render() {
        const {id, name, imagePath, url, content} = this.props
        return (
            <a href={url} alt="tms-lokomotif" className="card" target="_blank" rel="noreferrer" key={id}>
                <div className='card-body'>
                    <img src={[imagePath]} alt={name} />
                    <p>
                        {name}
                    </p>
                    <span>
                        { content }
                    </span>
                </div>
            </a>
        )
    }
}
export default HomeCard;