import "./App.css";
import AddCard from "./Components/Add/AddCard";
import Card from "./Components/Card/Card";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="Container">
      <h1>Sizning do'konlaringiz</h1>
      <div className="App">
        <Card />
        <Card />
        <AddCard />
        <Form />
      </div>
    </div>
  );
}

export default App;
