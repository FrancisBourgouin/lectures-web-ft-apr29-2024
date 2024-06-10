import Fancy from "./Fancy";
import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants } = props;

  const plant = plants[0];

  const parsedPlants = plants.map((plant) => <PlantListItem key={plant.id} {...plant} />);
  // const parsedPlants = plants.map((plant) => (
  //   <Fancy>
  //     <PlantListItem key={plant.id} {...plant} />
  //   </Fancy>
  // ));

  return (
    <main className="PlantList">
      <h1>List of plants</h1>
        <Fancy>
      <ul>
          {parsedPlants}
        {/* <PlantListItem
          name={plant.name}
          type={plant.type}
          lastWatered={plant.lastWatered}
          wateringInterval={plant.wateringInterval}
        /> */}

        {/* <PlantListItem {...plant } />
        <PlantListItem {...plant } />
        <PlantListItem {...plant } />
        <PlantListItem {...plant } />
        <PlantListItem {...plant } />
        <PlantListItem {...plant } /> */}

        {/* {[1,2,23,4,5,6,7,8,9]} */}
      </ul>
      </Fancy>
    </main>
  );
}
