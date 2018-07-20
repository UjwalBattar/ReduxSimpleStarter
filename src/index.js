import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyAXdM4ZyuCnGhiFwi0qjQL7cDPJJkLLP9s";

// Create a new component.
// This component will produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and
// put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector(".container"));
