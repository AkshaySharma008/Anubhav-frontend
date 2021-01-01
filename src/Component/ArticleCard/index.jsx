import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'


const ArticleCard = ({id,title,description,name,date,tags}) => {
    const parseDate = (str) => {
        let dt = new Date(str);
        return dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
    }
    return (
        <Link key={id} to={`/article/${id}`}>
        <div className="article-card col-12 mb-1">
            <span className="title">{title}</span>
            <span className="summary">{description}</span>
            <div className="d-flex mt-2">
              <span className="name flex-grow-1">by {name}</span>
              <span className="time flex-grow-1"> {parseDate(date)}</span>
            </div>

        </div>
            
        </Link>
    )
}

export default ArticleCard
