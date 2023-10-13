import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const register = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/register`,
        {
          email,
          name,
          password,
        }
      );
      const { data } = response.data;
      const { token } = data;

      // Save our token
      localStorage.setItem("token", token);

      //* Redirect to home or reload the home
      // This is imporary solution, the better solution is using redux
      window.location.replace("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error?.response?.data?.message);
        return;
      }
      alert(error?.message);
    }
  };

  return (
    <Container>
      <Card>
        <Card.Header className="fs-2 fw-bold text-center">
          Create Account
        </Card.Header>
        <Card.Body>
          <Form onSubmit={register}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control
                required
                className=" rounded-5"
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control
                className=" rounded-5 "
                required
                type="text"
                placeholder="Last name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className=" rounded-5"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                className=" rounded-5"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Button className="rounded-5" variant="danger" type="submit">
              Register Now
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
