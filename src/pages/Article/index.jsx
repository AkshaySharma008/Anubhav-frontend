import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react'
import Loading from '../../Component/Loading';
import './index.scss';
import parse from 'html-react-parser';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Article = ({ match }) => {
    const [articleData, setArticleData] = useState({});
    const [loading, setLoading] = useState(true);
    //const fetchData = async
    const loadData = useCallback(() => {
        const apiUrl_article = encodeURI(`/api/v1/article/${match.params.articleId}`);
        axios.get(apiUrl_article)
            .then((res) => {
                setArticleData(res.data.article[0])
                setLoading(false);
            })
    }, [match.params.articleId]);

    useEffect(() => {
        loadData()
    }, [loadData])

    const parseHTMLTags = (str) => {
        str = str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
        return str
    }

    const parseDate = (str) => {
        let dt = new Date(str);
        return dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
    }
    return (
        <div className="col-12 d-flex justify-content-around article-content my-5">
            { (loading) ? (<Loading />
            ) : (


                    <div className="flex-self-center article-body">
                        <h1 className="content-heading mt-4 mb-1 col-12 text-left"> {articleData.title}</h1>
                        <div className="content-author-detail col-12 mb-1 text-left">by {articleData.author.name} &nbsp; |&nbsp; {parseDate(articleData.createdAt)} &nbsp; |&nbsp;
                        <Link to={`/interview/${articleData.companyName}`}>{articleData.companyName}</Link>
                        </div>
                        <div className="tags mb-4 ">
                            {
                                articleData.articleTags.map((entity, index_e) =>
                                    <Badge variant='secondary' key={index_e} >{entity}</Badge>

                                )
                            }
                        </div>
                        <div className="content-paragraph col-12 text-left article-post">
                            {parse(parseHTMLTags(articleData.description))}
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Article
