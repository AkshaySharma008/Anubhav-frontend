import React from 'react'
import CreatorCard from '../../Component/CreatorCard/index';
import creatorData from './index.json';
import creatorImage from '../../assets/creatorLogo.svg';


const AboutCreators = () => {
    return (
        <div className="col-12 aboutCreator">
            <div className="d-flex flex-row-reverse">
            <img className="col-sm-12 col-md-4 my-5 creatorImage" src={creatorImage}></img>
            </div>
            <div className="col-12">
                <ul className="d-md-flex flex-md-row justify-content-around" style={{listStyle:"none"}}>
                    {creatorData.map((data,index) => (
                        <li className="m-5" key="index">
                            <CreatorCard id={data.id} Name={data.name} image={data.img} designation={data.designation} githubLink={data.githubLink} linkedInLink={data.linkedinLink} instagramLink={data.instagramLink} facebookLink={data.facebookLink}/>
                        </li>
                    ))
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default AboutCreators
