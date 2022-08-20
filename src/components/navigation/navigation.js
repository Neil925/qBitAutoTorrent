import React, { Component } from 'react';
import './navigation.scss';
import AxiosService from '../../services/axios';
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';

class Navigation extends Component {

    logout = async () => {
        await AxiosService.Logout();
        this.props.navigation('login');
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Nav className='me-auto' id='nav'>
                        <Nav.Link href="/#/" className='navLink'><h3>Dashboard</h3></Nav.Link>
                        <Nav.Link href="/#/auto" className='navLink'><h3>Auto Torrent</h3></Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link onClick={this.logout}><h3>Logout</h3></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

// eslint-disable-next-line
export default function (props) {
    const navigation = useNavigate();

    return <Navigation {...props} navigation={navigation} />;
}