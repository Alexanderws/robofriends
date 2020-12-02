import React, { useState, useEffect } from "react";

import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import ScrollContainer from "../components/ScrollContainer";
import ErrorBoundary from "../components/ErrorBoundary";

const App = () => {
  const [robotList, setRobotList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRobots = robotList.filter((robotObject) => {
    return robotObject.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setRobotList(users);
      });
  }, []);

  return (
    <div className="tc">
      <h1>ROBOFRIENDS</h1>
      <SearchBox onSearchTermChange={handleSearchTermChange} />
      {!robotList.length && <h2>Loading...</h2>}
      {robotList.length && (
        <ScrollContainer>
          <ErrorBoundary>
            <CardList listToRender={filteredRobots} />
          </ErrorBoundary>
        </ScrollContainer>
      )}
    </div>
  );
};

export default App;
