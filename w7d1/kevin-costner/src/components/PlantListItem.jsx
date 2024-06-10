// {
//   "id": "1",
//   "type": "Monsterous plant",
//   "name": "Monstera",
//   "lastWatered": "2024-05-20",
//   "wateringInterval": 7
// }

import { checkIfWellWatered } from "../helpers/dateHelpers";

export default function PlantListItem(props) {
  const {name, type, lastWatered, wateringInterval} = props

  const isWellWatered = checkIfWellWatered(lastWatered, wateringInterval)

  const classes = `PlantListItem ${isWellWatered ? "wet" : "dry"}`
  return (
    <li className={classes}>
      <span>{name} - {type}</span>
      <span>Last watered on: {lastWatered}</span>
    </li>
  );
}
