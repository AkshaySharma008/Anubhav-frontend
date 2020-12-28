import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="container-fluid my-2">
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Link to='/interview/amazon'> Amazon</Link>
                            <span className="badge badge-primary badge-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Link to='/interview/credit-suisse'> Credit-Suisse</Link>
                            <span className="badge badge-primary badge-pill">2</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Link to='/article/microsoft'> Microsoft</Link>
                            <span className="badge badge-primary badge-pill">1</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Link to='/article/sahaj'> Sahaj</Link>
                            <span className="badge badge-primary badge-pill">5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Link to='/article/ion'> ION</Link>
                            <span className="badge badge-primary badge-pill">8</span>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Link to='/interview/barclays'> Barclays</Link>
                            <span className="badge badge-primary badge-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Link to='/interview/UBS'> UBS</Link>
                            <span className="badge badge-primary badge-pill">6</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Link to='/article/HSBC'> HSBC</Link>
                            <span className="badge badge-primary badge-pill">12</span>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default HomePage
