import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import ArticleCard from '../../Component/ArticleCard';
import Loading from '../../Component/Loading';
import './index.scss';


const HomePage = () => {
    const [companyList, setCompanyList] = useState([]);
    const [recentArticles, setRecentArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const loadData = useCallback(() => {
        const apiUrl_companyList = '/api/v1/article/getAllCompanies';
        const apiUrl_allArticle = '/api/v1/article';
        axios.all([
            axios.get(apiUrl_companyList), 
            axios.get(apiUrl_allArticle)
          ])
          .then(axios.spread((res1, res2) => {
            
            console.log(res1.data, res2.data.articles)
            setCompanyList(res1.data.data);
            setRecentArticles(res2.data.articles)
            setLoading(false);
          }));
    }, []);

    useEffect(() => {
        loadData()
    }, [loadData])

    return (
        <div className="home-page-container container-fluid my-2 ">
            <div className="row">
                <div className="col-3 col-xm-12">
                    <ul className="list-group company-list">
                        <div className="title-bar d-flex">
                            <span className="title flex-grow-1">Company List</span>
                            {/* <Link to='/allCompany'>Show all</Link> */}
                        </div>
                        {
                            (loading) ? (
                                <div className="list-group-item d-flex justify-content-between align-items-center list-box" ><Loading />
                                </div>

                            ) : (
                                    companyList.map((item, index) => {
                                        return (
                                            <Link key={index} to={`/interview/${item.company}`} className="list-group-item d-flex justify-content-between align-items-center list-box" >{item.company}
                                                <span className="badge badge-secondary badge-pill">{item.count}</span>
                                            </Link>


                                        )
                                    })


                                )
                        }

                    </ul>
                </div>
                <div className="col-6">

                </div>
                <div className="col-3">
                    <ul className="list-group company-list">
                        <div className="title-bar d-flex">
                            <span className="title flex-grow-1">Recent Articles</span>
                        </div>
                        {
                            (loading) ? (
                                <div className="list-group-item d-flex justify-content-between align-items-center list-box" ><Loading />
                                </div>

                            ) : (
                                    recentArticles.map((item, index) => {
                                        return (
                                           <ArticleCard
                                           id={item._id}
                                           title={item.title}
                                           description={item.description}
                                           name={item.author.name}
                                           date={item.createdAt}
                                           tags={item.articleTags}
                                           />


                                        )
                                    })


                                )
                        }
                       
                    </ul>

                </div>
            </div>



        </div >
    )
}

export default HomePage
