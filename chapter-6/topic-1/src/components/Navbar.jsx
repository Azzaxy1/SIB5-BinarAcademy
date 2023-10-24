import { useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMe } from "../redux/actions/authActions";

const NavbarComponent = () => {
  const dispatch = useDispatch();

  const { user, token } = useSelector((state) => state.auth);

  const logout = (event) => {
    event.preventDefault();

    localStorage.removeItem("token");

    //* Redirect to home or reload the home
    // This is imporary solution, the better solution is using redux
    window.location.replace("/");
  };

  useEffect(() => {
    if (token) {
      dispatch(getMe());
    }
  }, [dispatch, token]);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Movie Review
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left Navbar */}
          <Nav className="me-auto fw-medium">
            {user && (
              <>
                <Nav.Link as={Link} to="/">
                  Popular
                </Nav.Link>
                <Nav.Link as={Link} to="/search">
                  Search Movies
                </Nav.Link>
              </>
            )}
          </Nav>

          {/* Right Navbar */}
          <Nav className="ms-auto fw-medium">
            {user ? (
              <>
                <Nav.Link as={Link} to="/myprofile">
                  {user?.name}
                </Nav.Link>
                <Nav.Link as={Button} onClick={logout}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
