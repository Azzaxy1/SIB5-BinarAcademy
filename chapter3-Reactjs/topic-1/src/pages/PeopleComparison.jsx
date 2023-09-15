import { useState } from "react";
import Comparison from "../components/Comparison";

const PeopleComparison = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [personOne, setPersonOne] = useState("");
  const [personTwo, setPersonTwo] = useState("");
  const [isSamePerson, setIsSamePerson] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const checkIsSamePerson = () => {
    setIsLoading(true);
    setIsChecked(true);

    if (personOne === personTwo) {
      setIsSamePerson(true);
    } else {
      setIsSamePerson(false);
    }

    setIsLoading(false);
  };

  return (
    <Comparison
      count={count}
      setCount={setCount}
      name={name}
      setName={setName}
      personOne={personOne}
      personTwo={personTwo}
      isChecked={isChecked}
      isSamePerson={isSamePerson}
      isLoading={isLoading}
      checkIsSamePerson={checkIsSamePerson}
      setPersonOne={setPersonOne}
      setPersonTwo={setPersonTwo}
      setIsSamePerson={setIsSamePerson}
      setIsLoading={setIsLoading}
      setIsChecked={setIsChecked}
    >
      <h1>React App</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        amet!
      </p>
    </Comparison>
  );
};

export default PeopleComparison;
