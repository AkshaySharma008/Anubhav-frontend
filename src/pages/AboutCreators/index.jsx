import React from 'react'
import CreatorCard from '../../Component/CreatorCard/index';
import creatorData from './details.json';
import creatorImage from '../../assets/creatorLogo.svg';
import './index.scss';


const AboutCreators = () => {
    return (
        <div className="container aboutCreator">
            <div className="d-flex flex-column ">
            <img className="col-sm-12 col-md-4 my-5 creatorImage" alt="" src={creatorImage}></img>
                <div className="d-md-flex flex-md-row flex-wrap justify-content-center" style={{listStyle:"none"}}>
                    {creatorData.map((data,index) => (
                        <div className="m-5" key={index}>
                            <CreatorCard id={data.id} Name={data.name} image={data.img} designation={data.designation} githubLink={data.githubLink} linkedInLink={data.linkedinLink} instagramLink={data.instagramLink} facebookLink={data.facebookLink}/>
                        </div>
                    ))
                    }
                </div>
           
            </div>
        </div>
    )
}

export default AboutCreators
