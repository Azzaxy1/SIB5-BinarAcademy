import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import GoogleLogin from "../components/GoogleLogin";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    // Prevent default is to prevent the default beheavior
    event.preventDefault();

    // Call the login action from redux action
    dispatch(login(email, password, navigate));
  };

  return (
    <Container>
      <Card>
        <Card.Header className="fs-2 fw-bold text-center">Login</Card.Header>
        <Card.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <GoogleLogin buttonText={"Login with Google"} />
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
