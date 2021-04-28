import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import { buildEndpoint } from "./utils";

function App() {
  const [query, setQuery] = useState("");

  const searchOnSubmit = (event) => {
    // Prevent default behavior
    event.preventDefault();
    const searchPhotoURL = buildEndpoint("random", `query=${query}`);
    fetch(searchPhotoURL)
      .then((res) => res.json())
      .then((searchResults) => {
        console.log(searchResults);
        setQuery("");
      });
  };

  return (
    <>
      <header className="mb-4">
        <Navigation title="Images Gallery" />
      </header>
      <Search onSubmit={searchOnSubmit} setQuery={setQuery} query={query} />
    </>
  );
}

export default App;
