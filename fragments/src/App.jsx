import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {

  // let foodItems = [];

  
  return (
    <center>
      <div>
        <h1>Healthy Foods</h1>
       <FoodItems/>
       <ErrorMessage/>
      </div>
    </center>
  );
}

export default App;
