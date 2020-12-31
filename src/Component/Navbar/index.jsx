import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Navbar = () => {
    return (
        <>
        <div className="d-flex justify-content-around  p-2 border-bottom navbar">
            <Link to='/' className="flex-grow-1 ml-5 bd-highlight title">Anubhav</Link>

            <div className="action-buttons">
            
            <Link to='/write' className="btn btn-primary">Write Article</Link>
            <Link to='/request' className="ml-3 mr-3 btn btn-outline-primary">Request Article</Link>
            {/* <Link to='/guidelines' className="guidelines-logo"> <i className="fa fa-question-circle-o" aria-hidden="true"></i></Link> */} 
            </div>
           
        </div>
        </>
    )
}

export default Navbar
