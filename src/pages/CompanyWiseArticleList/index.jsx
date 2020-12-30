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
                console.log(res.data, res.data.articles)
                setArticleList(res.data.articles)
                setLoading(false);
            })
    }, []);

    useEffect(() => {
        loadData()
    }, [loadData])

    return (
        <div className="container article-list-container">
            <h4>Interview experiences of {match.params.companyName}</h4>
            <div className="d-flex flex-wrap article-group">
                {
                    (loading) ? (
                        <Loading />

                    ) : (
                            articleList.map((item, index) => {
                                return (
                                    <ArticleCard
                                        id={item._id}
                                        title={item.title}
                                        description={item.description}
                                        name={item.author.name}
                                        date={item.createdAt}
                                        tags={item.articleTags}
                                    />)
                            })
                        )
                }

            </div>
        </div>
    )
}

export default CompanyWiseArticleList
