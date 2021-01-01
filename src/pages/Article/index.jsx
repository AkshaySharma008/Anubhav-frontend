import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react'
import Loading from '../../Component/Loading';
import './index.scss';

const Article = ({match}) => {
    const [articleData, setArticleData] = useState({});
    const [loading, setLoading] = useState(true);
    const loadData = useCallback(() => {
        const apiUrl_article = encodeURI(`/api/v1/article/${match.params.articleId}`);
        axios.get(apiUrl_article)
            .then((res) => {
                console.log(res.data, res.data.article[0])
                setArticleData(res.data.article[0])
                setLoading(false);
                console.log(articleData)
            })
    }, []);

    useEffect(() => {
        loadData()
    }, [loadData])
    return (
        <div className="col-12 d-flex justify-content-around article-content">
            { (loading) ? (<Loading/>
            ) : (

           
            <div className="flex-self-center">
                <h1 className="content-heading mt-4 mb-1 col-12 text-left"> {articleData.title}</h1>
                <p className="content-author-detail col-12 mb-4 text-left">{articleData.author.name} &nbsp; |&nbsp; 23 Dec 2020</p>
                <p className="content-paragraph col-12 text-left">
                <div dangerouslySetInnerHTML={{ __html: articleData.description }} />
                </p>
            </div>
             )}
        </div>
    )
}

export default Article
