import "./App.scss";
import Header from "./components/Header";
import PlantList from "./components/PlantList";

import { plantsArr } from "./data/plantData";

function App() {
  const amountOfPlants = plantsArr.length


  return (
    <div className="App">
      {/* {Header()} */}
      <Header amountOfPlants={amountOfPlants}/>
      <PlantList plants={plantsArr}/>
    </div>
  );
}

export default App;
