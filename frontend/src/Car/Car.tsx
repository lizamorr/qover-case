import React, { useState } from "react";

export const Car = () => {
  //const [age, setAge] = useState(0);
  const [selectedCar, setSelectedCar] = useState("");
  //const [cars, setCars] = useState([]);
  const [price, setPrice] = useState(0);

  const calculatePrice = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="car">
      <div className="car__container">
        <div className="car__card">
          <form className="car__card-form" onSubmit={calculatePrice}>
            <div className="car__card-row">
              <span className="car__card-label">Age of the driver</span>
              <div className="car__card-input">
                <input
                  type="number"
                  className="input"
                  //value={age}
                  //onChange={(event) => setAge(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className="car__card-row">
              <span className="car__card-label">Car</span>
              <div className="car__card-input">
                <select
                  className="select"
                  name="selectedCar"
                  value={selectedCar}
                  onChange={(event) => setSelectedCar(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className="car__card-row">
              <span className="car__card-label">Purchase Price</span>
              <div className="car__card-input">
                <input
                  type="number"
                  className="input"
                  value={price}
                  //onChange={(event) => setPrice(event.target.value)}
                  required
                />
              </div>
            </div>
            <button className="price-button" type="submit">
              Get a price
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
