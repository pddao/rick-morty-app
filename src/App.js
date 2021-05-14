import "./App.css";
import Character from "./components/Character";
import { loadCharacters } from "./service/api-service";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [characterData, setCharacterData] = useState([]);

  const [searchString, setSearchString] = useState("");

  const [isLoading, setLoading] = useState(false);

  const filteredCharacters = characterData.filter((character) =>
    character.name
      .toLocaleLowerCase()
      .includes(searchString.toLocaleLowerCase())
  );

  const [error, setError] = useState();

  const [page, setPage] = useState(1);

  useEffect(() => {
    loadData(page);
  }, [page]);

  function loadData(page) {
    setLoading(true);
    loadCharacters(page)
      .then((data) => setCharacterData(data.results))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }

  return (
    <div className="App">
      <Header />
      <input
        value={searchString}
        onChange={(event) => {
          setSearchString(event.target.value);
        }}
      />
      <button onClick={() => setSearchString("")}>clear</button>
      <button onClick={() => setPage(page + 1)}>next</button>
      {error && <div> Error has ocurred! {error.message}</div>}
      {isLoading && <div> Loading ... </div>}
      {filteredCharacters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;
