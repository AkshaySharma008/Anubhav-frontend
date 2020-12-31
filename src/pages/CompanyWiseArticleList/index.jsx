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
        <div className="container mt-4 article-list-container">
            <div className="list-group-item d-inline-block p-1 px-3 mb-3 d-flex justify-content-between align-items-center list-box my-1" >
                <div><img alt="logo" className="companyLogoImg rounded-circle"></img> {match.params.companyName}</div>
                <span className="badge badge-secondary badge-pill">1</span>
            </div>
            <div className="col-12 d-flex flex-wrap article-group">
                {
                    (loading) ? (
                        <Loading />

                    ) : (
                            articleList.map((item, index) => {
                                return (
                                    <div className="col-md-4" key="index">
                                        <ArticleCard
                                            id={item._id}
                                            title={item.title}
                                            description={item.description}
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
