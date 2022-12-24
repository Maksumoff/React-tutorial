import "./App.css";
import Fruits from "./Components/Fruit/Fruits";
import ListOfFruits from "./Components/Fruit/FruitsList";

function App() {
  return (
    <div className="Container">
      <h1>Tropic Fruits</h1>
      <div className="Fruits">
        {ListOfFruits.map((fruit, i) => {
          return <Fruits key={i} properties={fruit} />;
        })}
      </div>
    </div>
  );
}

export default App;
