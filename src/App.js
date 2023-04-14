import logo from "./logo.svg";
import "./App.css";
import myData from "./product.json";

function App() {
  const number = [1, 2, 3, 10];
  console.log(myData);
  return (
    <div className="App">
      {number.map((num) => (
        <p>{num}</p>
      ))}
    </div>
  );
}

export default App;
