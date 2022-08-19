import React, { Component } from 'react';
import './dashboard.css';
import AxiosService from '../../services/axios';
import { useNavigate } from "react-router-dom";
import Navigation from '../../components/navigation/navigation';

class Dashboard extends Component {

    logout = async () => {
        await AxiosService.Logout();
        this.props.navigation('login');
    }

    render() {
        return (
            <div className="Home" >
                <Navigation />
                <h1>Dashboard</h1>
            </div>
        );
    }
}

// eslint-disable-next-line
export default function (props) {
    const navigation = useNavigate();

    return <Dashboard {...props} navigation={navigation} />;
}