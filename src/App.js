import "./App.css";
import AddCard from "./Components/Add/AddCard";
import Card from "./Components/Card/Card";

function App() {
  return (
    <div className="Container">
      <h1>Sizning do'konlaringiz</h1>
      <div className="App">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <AddCard />
        <AddCard />
      </div>
    </div>
  );
}

export default App;
