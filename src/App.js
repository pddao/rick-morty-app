import './App.css';
import Character from "./components/Character";

function App() {
    const characterData = [{
        id: "1",
        name: "Jochen",
        description: "blub"
    }, {
        id: "2",
        name: "Petra",
        description: "blubbel"
    }]

    return <div className="App">
        <Character name={characterData[0].name} description={"blubbel"}/>
        <Character name={"Hans"} description={"blubbel"}/>
    </div>;

}
export default App;
