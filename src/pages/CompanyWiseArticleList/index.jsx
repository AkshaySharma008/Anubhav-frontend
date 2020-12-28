import React from 'react'
import { Link } from 'react-router-dom'

const CompanyWiseArticleList = ({ match }) => {
    return (
        <div className="container">
            <h4 className="align-middle">Company Name : {match.params.companyName}</h4>
            <div className="list-group">
                <Link to='/article/1234' className="list-group-item list-group-item-action flex-column align-items-start ">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">First Article</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                </Link>
                <Link to='/article/1444234' className="list-group-item list-group-item-action flex-column align-items-start ">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Second Article</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                </Link>
                <Link to='/article/3545451234' className="list-group-item list-group-item-action flex-column align-items-start ">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">third Article</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                </Link>
            </div>
            <br/>
            <Link to='/article/1234'> First article</Link><br/>
            <Link to='/article/923344'> Second article</Link><br/>
            <Link to='/article/3344'> third article</Link>
        </div>
    )
}

export default CompanyWiseArticleList
