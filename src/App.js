import "./App.css";
import Character from "./components/Character";
import { useState } from "react";
import { loadCharacters } from "./service/api-service";
import Header from "./components/Header";
import axios from "axios";

function App() {
  // return <div className="App">
  //     <Header/>
  // //     <Character character={characterData.results[0]} />
  // //     <Character character={characterData.results[10]} />
  // // </div>;

  const [characterData, setCharacterData] = useState({
    results: [],
  });

  const [searchString, setSearchString] = useState("");

  const filteredCharacters = characterData.results.filter((character) =>
    character.name
      .toLocaleLowerCase()
      .includes(searchString.toLocaleLowerCase())
  );

  function loadData() {
    loadCharacters().then((data) => setCharacterData(data));
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
      <button onClick={() => loadData()}>load data</button>

      {filteredCharacters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;
