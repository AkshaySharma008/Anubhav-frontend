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
                { (name && (
                    <span className="name flex-grow-1">by {name}</span>
                ))}
            
           
            </div>

        </div>
            
        </Link>
    )
}

export default ArticleCard
