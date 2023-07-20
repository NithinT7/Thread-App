import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import "../component-styles/Navbar.css"
import logo from "../logo.png"
const Navbar = () => {
    const {loggedIn, setLoggedIn} = useContext(AppContext);

    const handleLogout = () => {
        setLoggedIn(false);
    }
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1"><img src={logo} width="30" height="24"/></span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {!loggedIn && <a className="nav-link" aria-current="page" href="/" style={{color: "white"}}>Home</a>}
                            {loggedIn && <a className="nav-link" aria-current="page" href="/feed" style={{color: "white"}}>Feed</a>}
                        </li>
                        <li className="nav-item">
                            {!loggedIn &&<a className="nav-link" aria-current="page" href="/about"style={{color: "white"}}>About</a>}
                            {loggedIn && <a className="nav-link" aria-current="page" href="/new" style={{color: "white"}}>New Post</a>}
                        </li>
                        <li className="nav-item">
                            {!loggedIn && <a className="nav-link" aria-current="page" href="/login" style={{color: "white"}}>Login</a>}
                            {loggedIn && <a className="nav-link btn btn-danger" aria-current="page" href="/" onClick={handleLogout} style={{color: "white"}}>Logout</a>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar