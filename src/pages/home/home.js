import './home.css';
import { Link } from "react-router-dom";
import React from 'react';
import { withCookies } from 'react-cookie';

class Home extends React.Component {
    render() {
        return (
            <div className="Home" >
            <nav className='navbar'>
                <ul className='unlisted'>
                <Link to="/login"><h2>Login</h2></Link>
                <Link to="/auto"><h2>Logout</h2></Link>
                </ul>
            </nav>
    </div>
    );
    }
}

export default withCookies(Home);