import React, {useState} from "react";
import Form from "react-bootstrap/form";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import Button from "react-bootstrap/Button";
import "./login.css";

class Login extends Component {

    const Login = ()=> {
        const [data, setData] = useState('');
    }

    const handleChange = ({ target }) => {
        const { name, value } = target;
        const newData = Object.assign({}, data, { [name]: value });
        setData(newData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col sm={8}>
                        <Form onSubmit={handleSubmit}>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;
