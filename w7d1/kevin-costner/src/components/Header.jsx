import Fancy from "./Fancy";

export default function Header(props) {
  // Computational part
  const { amountOfPlants } = props;

  return (
    <>
      {/* RENDERING PART! */}
      <header className="Header">
        <h1>Kevin's Watering World</h1>

        <Fancy>
          {amountOfPlants > 1 && <h2>Saving {amountOfPlants} plants from dehydration</h2>}
          {amountOfPlants === 1 && <h2>Saving a plant from dehydration</h2>}
          {amountOfPlants === 0 && <h2>Not saving plants from dehydration</h2>}
        </Fancy>
      </header>
    </>
  );
}

// && Short-circuit

// How many things can you return in a JS function? 1 !
