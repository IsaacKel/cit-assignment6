import React, { useState } from "react";
import useFetchData from "./hooks/useFetchData";
import Person from "./components/Person";
import ImagesFor from "./components/ImagesFor";
import "./App.css"; // Importing the CSS file

function App() {
  const apiKey = "003b3d8750e2856a2fc6e6414311d7eb";
  const query = "spielberg";

  const data = useFetchData(apiKey, query);
  const [indexCounter, setIndexCounter] = useState(0);

  const handlePrevious = () => {
    setIndexCounter((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setIndexCounter((prevIndex) =>
      prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div className="app-container">
      {data.length > 0 && (
        <div className="card">
          <Person person={data[indexCounter]} />
          <ImagesFor id={data[indexCounter].id} apiKey={apiKey} />
          <div className="button-row">
            <button onClick={handlePrevious} className="nav-button">
              Previous
            </button>
            <p className="index-counter">
              Person {indexCounter + 1} of {data.length}
            </p>
            <button onClick={handleNext} className="nav-button">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
