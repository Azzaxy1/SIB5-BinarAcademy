import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  //* Compare the same name
  const [personOne, setPersonOne] = useState("");
  const [personTwo, setPersonTwo] = useState("");
  const [isSamePerson, setIsSamePerson] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkIsSamePerson = (event) => {
    event.preventDefault();

    if (!personOne || !personTwo) {
      alert("Person one or Person two is not valid");
    }

    setIsLoading(true);

    setTimeout(() => {
      if (personOne === personTwo) {
        setIsSamePerson(true);
      } else {
        setIsSamePerson(false);
      }

      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <h1>{name}</h1>
        <label htmlFor="Name">My Name: </label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
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
      <div>
        <button type="submit" onClick={checkIsSamePerson}>
          {!isLoading ? "Check!" : "Checking...."}
        </button>
      </div>
      <div>
        <h2>
          {personOne &&
            personTwo &&
            (isSamePerson ? "The person is same" : "The person is different")}
        </h2>
      </div>
    </>
  );
}

export default App;
