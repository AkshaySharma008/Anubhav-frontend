import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <div className="d-flex justify-content-around mx-2 p-2 border-bottom">
            <h4 className="p-2 flex-grow-1 bd-highlight">Anubhav : Experience sharing corner</h4>

            <Link to='/' className="p-2">Home</Link>
            <Link to='/write' className="p-2">Write Article</Link>
            <Link to='/request' className="p-2">Request Article</Link>
           
        </div>
        </>
    )
}

export default Navbar
