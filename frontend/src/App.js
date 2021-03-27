import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Search from "./components/Search";

function App() {
  const [query, setQuery] = useState("");

  const searchOnSubmit = (event) => {
    // Prevent default behavior
    event.preventDefault();
    console.log(query)
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
