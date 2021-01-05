import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react'
import ArticleCard from '../../Component/ArticleCard';
import Loading from '../../Component/Loading';
import './index.scss';

const CompanyWiseArticleList = ({ match }) => {
    const [articleList, setArticleList] = useState([]);
    const [loading, setLoading] = useState(true);
    const loadData = useCallback(() => {
        const apiUrl_articleList = encodeURI(`/api/v1/article/company/${match.params.companyName}`);
        axios.get(apiUrl_articleList)
            .then((res) => {
                setArticleList(res.data.articles)
                setLoading(false);
            })
    }, [match.params.companyName]);

    useEffect(() => {
        loadData()
    }, [loadData])

    const replaceHTMLTags=(str)=>{
        str = str.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/&nbsp;/g,' ');
        return str.replace(/<\/?[^>]+(>|$)/g, "")
    }

    return (
        <div className="container mt-4 article-list-container">
             <h4 className="my-4 article-heading">Interview experiences of {match.params.companyName}</h4>
            <div className="col-12 d-flex flex-wrap article-group">
                {
                    (loading) ? (
                        <Loading />

                    ) : (
                            articleList.map((item, index) => {
                                return (
                                    <div className="col-md-4" key={index}>
                                        <ArticleCard
                                            key={index}
                                            id={item._id}
                                            title={item.title}
                                            description={replaceHTMLTags(item.description)}
                                            name={item.author.name}
                                            date={item.createdAt}
                                            tags={item.articleTags}
                                        />
                                    </div>)
                            })
                        )
                }

            </div>
        </div>
    )
}

export default CompanyWiseArticleList
