import React, { useState } from "react";
import useFetchData from "./hooks/useFetchData";
import Person from "./components/Person";
import ImagesFor from "./components/ImagesFor";
import "./App.css";

function App() {
  const apiKey = "003b3d8750e2856a2fc6e6414311d7eb";
  const query = "spielberg";

  const data = useFetchData(apiKey, query);
  const [indexCounter, setIndexCounter] = useState(0);

  const handleJumpToIndex = (index) => {
    setIndexCounter(index);
  };

  const renderPagination = () => {
    const paginationButtons = [];
    const total = data.length;
    const visiblePages = 7;

    if (total === 0) return null;

    // Calculate the range of pages to display
    let startPage = Math.max(0, indexCounter - Math.floor(visiblePages / 2));
    let endPage = Math.min(total - 1, startPage + visiblePages - 1);

    // Adjust the start page if endPage exceeds the total
    if (endPage - startPage < visiblePages - 1) {
      startPage = Math.max(0, endPage - visiblePages + 1);
    }

    // Add "First" button and ellipsis if necessary
    if (startPage > 0) {
      paginationButtons.push(
        <button
          key={0}
          onClick={() => handleJumpToIndex(0)}
          className="nav-button"
        >
          1
        </button>
      );

      if (startPage > 1) {
        paginationButtons.push(
          <span key="start-ellipsis" className="ellipsis">
            ···
          </span>
        );
      }
    }

    // Add buttons for N-2, N-1, N, N+1, N+2
    for (let i = startPage; i <= endPage; i++) {
      paginationButtons.push(
        <button
          key={i}
          onClick={() => handleJumpToIndex(i)}
          className={`nav-button ${i === indexCounter ? "active" : ""}`}
        >
          {i + 1}
        </button>
      );
    }

    // Add ellipsis and "Last" button if necessary
    if (endPage < total - 1) {
      if (endPage < total - 2) {
        paginationButtons.push(
          <span key="end-ellipsis" className="ellipsis">
            ···
          </span>
        );
      }

      paginationButtons.push(
        <button
          key={total - 1}
          onClick={() => handleJumpToIndex(total - 1)}
          className="nav-button"
        >
          {total}
        </button>
      );
    }

    return <div className="pagination-row">{paginationButtons}</div>;
  };

  return (
    <div className="app-container">
      {data.length > 0 ? (
        <div className="card">
          <Person person={data[indexCounter]} />
          <ImagesFor id={data[indexCounter].id} apiKey={apiKey} />
          {renderPagination()}
        </div>
      ) : (
        <div className="no-results">No results for search</div>
      )}
    </div>
  );
}

export default App;
