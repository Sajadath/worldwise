import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  console.log(cities);

  if (!cities.length)
    return <Message message="add Your city by clicking"></Message>;
  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city}></CityItem>
      ))}{" "}
    </ul>
  );
}
export default CityList;
