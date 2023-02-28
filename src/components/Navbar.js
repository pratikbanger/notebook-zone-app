import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = (props) => {
    let location = useLocation();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        props.showAlert("You have been logged out successfully!!", "warning")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NoteBook Zone</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/notes" ? "active" : ""}`} to="/notes">Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About US</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact US</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="https://github.com/pratikbanger" target="_blank">My GitHub</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="https://www.linkedin.com/in/pratik-bangar-677013258" target="_blank">My Linkdin</a>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                            <Link className="btn btn-sm btn-primary mx-2" to="/login" role="button">Log In</Link>
                            <Link className="btn btn-sm btn-primary mx-2" to="/signup" role="button">Sign Up</Link>
                        </form> : <Link onClick={handleLogOut} className="btn btn-sm btn-primary mx-2" to="/login" role="button">Log Out</Link>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar