import { Button, Spinner } from "react-bootstrap";
import "./App.css";
import CardGroup2 from "./components/CardGroup2/CardGroup2";

function App() {
  return (
    <div className="App">
      <h1> Hello React Bootstrap </h1>
      <Button variant="danger">My button</Button>
      <Spinner animation="border" />
      <CardGroup2></CardGroup2>
    </div>
  );
}

export default App;
