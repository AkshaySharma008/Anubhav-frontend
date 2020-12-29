import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../Component/Loading';

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
        <div className="container-fluid my-2">
            <div className="row">
                <div className="col-6 col-xm-12">
                    <ul className="list-group">
                        {
                            (loading) ? (
                                <Loading />
                            ) : (
                                    companyList.map((item, index) => {
                                        return (
                                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center" >
                                                <Link to={`/interview/${item.company}`}> {item.company}</Link>
                                                <span className="badge badge-secondary badge-pill">{item.count}</span>
                                            </li>

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
