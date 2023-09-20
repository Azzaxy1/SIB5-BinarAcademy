import { Container, Row, Col } from "react-bootstrap";
import students from "../data/Students.json";
import Student from "../components/Student";

const Students = () => {
  return (
    <Container className="mt-4">
      <Row className="g-4">
        {students.map((student) => (
          <Col key={student.id} md={3}>
            <Student name={student.name} className={student.class} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Students;
