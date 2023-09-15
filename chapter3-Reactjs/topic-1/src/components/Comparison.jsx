import ReactLogo from "../assets/react.svg";
import propTypes from "prop-types";
import { useEffect } from "react";

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
        <input type="text" onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
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
      </div>
      {/* <div>
        <button type="submit" onClick={checkIsSamePerson}>
          {!isLoading ? "Check!" : "Checking...."}
        </button>
      </div> */}
      <div>
        <h3>
          {isChecked &&
            (isSamePerson ? "The person is same" : "The person is different")}
        </h3>
      </div>

      {children}
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
