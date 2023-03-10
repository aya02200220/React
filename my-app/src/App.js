import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card/card";
import data from "./components/card-data.json";

function App() {
  const cardElements = data.map((ele, index) => <Card key={index} {...ele} />);

  return (
    <div className="container">
      <div className="card-Container">{cardElements}</div>;
    </div>
  );
}

export default App;
