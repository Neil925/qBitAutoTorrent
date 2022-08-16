import React, { Component } from 'react';
import './dashboard.scss';
import AxiosService from '../../services/axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

class Dashboard extends Component {

    logout = async () => {
        await AxiosService.Logout();
        this.props.navigation('/');
    }

    render() {
        return (
            <div className="Home" >
                <nav className='navbar'>
                    <ul className='unlisted'>
                        <Link to="auto"><h2>Auto Torrent</h2></Link>
                        <Link to="logout"><h2>Logout</h2></Link>
                    </ul>
                </nav>
            </div>
        );
    }
}

// eslint-disable-next-line
export default function (props) {
    const navigation = useNavigate();

    return <Dashboard {...props} navigation={navigation} />;
}