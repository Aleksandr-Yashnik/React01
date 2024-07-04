
import CarCard from "../../components/CarCard/CarCard";
import "./styles.css";

const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
  { brand: "Audi", price: 50000, isDiesel: true },
];

const Homework_06 = () => {
  return (
    <div className="homework-06">
      <h1>Car Collection</h1>
      <div className="card-container">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            brand={car.brand}
            price={car.price}
            isDiesel={car.isDiesel}
          />
        ))}
      </div>
    </div>
  );
};

export default Homework_06;
