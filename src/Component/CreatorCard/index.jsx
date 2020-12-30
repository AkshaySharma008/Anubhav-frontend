import React from 'react'
import './index.scss'

import instagramLogo from '../../assets/instagram1.svg';
import facebookLogo from '../../assets/facebook1.svg';
import linkedinLogo from '../../assets/linkedin1.svg';
import githubLogo from '../../assets/github1.svg';


const CreatorCard = ({id,Name,image,designation,githubLink,linkedInLink,instagramLink,facebookLink}) => {
    return (
        <div className="creator-card p-3">
          <img src={image} alt="creatorImage" className="createrCardImg rounded-circle"></img>
          <p className="namePara">{Name}</p>
          <p className="designationPara">{designation}</p>
          <div className="d-flex flex-row justify-content-around">
            <a className="CardlogoDiv" href={githubLink}><img src={githubLogo}></img></a>
            <a className="CardlogoDiv" href={linkedInLink}><img src={linkedinLogo}></img></a>
            <a className="CardlogoDiv" href={instagramLink}><img src={instagramLogo}></img></a>
            <a className="CardlogoDiv" href={facebookLink}><img src={facebookLogo}></img></a>
          </div>
          
          
        </div>
    )
}

export default CreatorCard;
