import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import ArticleCard from '../../Component/ArticleCard';
import Carousel from 'react-bootstrap/Carousel'
import Loading from '../../Component/Loading';
import './index.scss';

import headerImageFirst from '../../assets/frame_1.svg'
import headerImageSecond from '../../assets/frame_2.svg'
import headerImageThird from '../../assets/frame_3.svg'


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
                                            <Link key={index} to={`/interview/${item.company}`} className="list-group-item d-flex justify-content-between align-items-center list-box" >
                                                <div><img src={item.domainName} alt="logo" className="companyLogoImg rounded-circle"></img> {item.company}</div>
                                                <span className="badge badge-secondary badge-pill">{item.count}</span>
                                            </Link>


                                        )
                                    })


                                )
                        }

                    </ul>
                </div>
                <div className="col-6 container d-flex flex-column justify-content-center">
                    <span className="header-title">Interview Experience Sharing platform</span>
                    {/* <img src={headerImage} alt="Anubhav"/> */}
                    <Carousel>
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src={headerImageFirst}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3><b>Read Experience</b></h3>
                                <p>Prepare for interview knowledge of previous expriences.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={headerImageSecond}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3><b>Write your Experience</b></h3>
                                <p>Share your expreience with others, so that they can prepare well for interviews</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={headerImageThird}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3><b>Request Experience</b></h3>
                                <p>We will also help you to get desired interview expriences of others</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <span className="mt-2 text-center">Made with ❤️ by <Link to='/made-by'><u>OSS Club</u> </Link> only for AITians</span>
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
