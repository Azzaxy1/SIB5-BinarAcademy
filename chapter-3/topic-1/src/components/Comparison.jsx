import ReactLogo from "../assets/react.svg";
import propTypes from "prop-types";
import { useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";

const Comparison = ({
  count,
  setCount,
  name,
  setName,
  personOne,
  personTwo,
  isSamePerson,
  isChecked,
  setPersonOne,
  setPersonTwo,
  setIsChecked,
  checkIsSamePerson,
  children,
}) => {
  useEffect(() => {
    console.log("Hello world");
  }, []);

  useEffect(() => {
    if (personOne && personTwo) {
      setIsChecked(true);
      checkIsSamePerson();
    } else {
      setIsChecked(false);
    }
  }, [personOne, personTwo, checkIsSamePerson, setIsChecked]);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div>
          <img className="logo react" src={ReactLogo} />
        </div>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <div>
          <h1>{name}</h1>
          <label htmlFor="Name">My Name: </label>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        {/* <div>
          <label htmlFor="personOne">Person One: </label>
          <input
            type="text"
            value={personOne}
            onChange={(event) => setPersonOne(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="personTwo">Person Two: </label>
          <input
            type="text"
            value={personTwo}
            onChange={(event) => setPersonTwo(event.target.value)}
          />
        </div> */}

        <InputGroup className="mb-3">
          <InputGroup.Text id="person-one">Person One :</InputGroup.Text>
          <Form.Control
            aria-label="Person One"
            aria-describedby="person-one"
            value={personOne}
            onChange={(event) => setPersonOne(event.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="person-two">Person Two :</InputGroup.Text>
          <Form.Control
            aria-label="Person Two"
            aria-describedby="person-two"
            value={personTwo}
            onChange={(event) => setPersonTwo(event.target.value)}
          />
        </InputGroup>

        <div>
          <h3>
            {isChecked &&
              (isSamePerson ? "The person is same" : "The person is different")}
          </h3>
        </div>

        {children}
      </div>
    </>
  );
};

Comparison.propTypes = {
  count: propTypes.number,
  name: propTypes.string,
  personOne: propTypes.string,
  personTwo: propTypes.string,
  isSamePerson: propTypes.bool,
  isChecked: propTypes.bool,
  setName: propTypes.func,
  setCount: propTypes.func,
  setPersonOne: propTypes.func,
  setPersonTwo: propTypes.func,
  checkIsSamePerson: propTypes.func,
  children: propTypes.node,
  setIsChecked: propTypes.func,
};

export default Comparison;
