import { Card, Button } from "react-bootstrap";
import propTypes from "prop-types";

const Student = ({ name, className }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{className}</Card.Text>
        <Button variant="primary">Submit</Button>
      </Card.Body>
    </Card>
  );
};

Student.propTypes = {
  name: propTypes.string,
  className: propTypes.string,
};

export default Student;
