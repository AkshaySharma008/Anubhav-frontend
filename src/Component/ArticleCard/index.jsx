import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'


const ArticleCard = ({id,title,description,name,time,tags}) => {
    return (
        <Link key={id} to={`/article/${id}`}>
        <div className="article-card">
            <span className="title">{title}</span>
            <span className="summary">{description}</span>
            <div className="d-flex mt-2">
                {console.log(name)}
                { (name && (
                    <span className="name flex-grow-1"> {name}</span>
                ))}
            
                <span className="time flex-grow-1"> 23/08/2001</span>
            </div>

        </div>
            
        </Link>
    )
}

export default ArticleCard
