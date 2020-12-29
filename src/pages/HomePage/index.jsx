import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../Component/Loading';
import './index.scss';


const HomePage = () => {
    const [companyList, setCompanyList] = useState([]);
    const [loading, setLoading] = useState(true);
    const loadData = useCallback(() => {
        const apiUrl = '/api/v1/article/getAllCompanies';
        axios.get(apiUrl).then((res) => {
            console.log(res.data, res.data.data)
            setCompanyList(res.data.data);
            setLoading(false);
        })
    }, []);

    useEffect(() => {
        loadData()
    }, [loadData])

    return (
        <div className="home-page-container container-fluid my-2 ">
            <div className="row">
                <div className="col-3 col-xm-12">
                    <ul className="list-group company-list">
                        {
                            (loading) ? (
                                <Loading />
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
                        <Link to={`/interview/microsoft`} className="list-group-item d-flex justify-content-between align-items-center list-box" >Microsoft
                        <span className="badge badge-secondary badge-pill">3</span>
                        </Link>
                        <Link to={`/interview/amazon`} className="list-group-item d-flex justify-content-between align-items-center list-box" >Amazon
                        <span className="badge badge-secondary badge-pill">1</span>
                        </Link>

                    </ul>
                </div>
                <div className="col-6">

                </div>
                <div className="col-3">

                </div>
            </div>



        </div >
    )
}

export default HomePage
