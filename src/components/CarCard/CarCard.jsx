
import PropTypes from "prop-types";
import "./styles.css";

const CarCard = ({ brand, price, isDiesel }) => {
  return (
    <div className="car-card">
      <h2>{brand}</h2>
      <p>Price: ${price}</p>
      <p>Fuel: {isDiesel ? "Diesel" : "Petrol"}</p>
    </div>
  );
};

CarCard.propTypes = {
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isDiesel: PropTypes.bool.isRequired,
};

export default CarCard;
