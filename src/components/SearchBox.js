import React from "react";

const SearchBox = ({ onSearchTermChange }) => {
  return (
    <div className="pa2">
      <input
        onChange={onSearchTermChange}
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Will Smith"
      />
    </div>
  );
};

export default SearchBox;
