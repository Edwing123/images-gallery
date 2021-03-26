import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Search from "./components/Search";

function App() {
  return (
    <>
      <header className="mb-4">
        <Navigation title="Images Gallery" />
      </header>
      <Search />
    </>
  );
}

console.log(App())

export default App;
