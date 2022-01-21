import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICarModel, IOption } from "./types";

export const Car = () => {
  const [age, setAge] = useState(0);
  const [selectedCar, setSelectedCar] = useState("");
  const [carModels, setCarModels] = useState<IOption[]>([]);
  const [price, setPrice] = useState(0);

  const [monthlyGlobalPrice, setMonthlyGlobalPrice] = useState(0);
  const [monthlyUniversePrice, setMonthlyUniversePrice] = useState(0);
  const [yearlyGlobalPrice, setYearlyGlobalPrice] = useState(0);
  const [yearlyUniversePrice, setYearlyUniversePrice] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getCarModels(): Promise<void> {
      axios
        .get("/cars")
        .then((res) =>
          setCarModels(
            res.data.cars.map((car: ICarModel) => ({
              label: car.model,
              value: car.id,
            }))
          )
        )
        .catch(() => alert("Error receiving cars"));
    }
    getCarModels(), [];
  });

  const handleAgeChange = (e: any) => {
    setAge(e.target.value);
  };
  const handleCarSelectionChange = (e: any) => {
    setSelectedCar(e.target.value);
  };
  const handlePriceChange = (e: any) => {
    setPrice(e.target.value);
  };

  const handleFormSubmit = async () => {
    axios
      .post("/quote", { params: { selectedCar, age, price } })
      .then((res) => dispatch(res.data))
      .catch(() => {});
  };

  return (
    <div className="car">
      <div className="car__container">
        <div className="car__card">
          <form
            className="car__card-form"
            onSubmit={handleFormSubmit}
            method="POST"
          >
            <div className="car__card-row">
              <span className="car__card-label">Age of the driver</span>
              <div className="car__card-input">
                <input
                  name="age"
                  type="number"
                  className="input"
                  value={age}
                  onChange={handleAgeChange}
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
                  onChange={handleCarSelectionChange}
                  required
                >
                  <option value=""></option>
                  {carModels.map((car) => (
                    <option key={car.value} value={car.value}>
                      {car.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="car__card-row">
              <span className="car__card-label">Purchase Price</span>
              <div className="car__card-input">
                <input
                  name="price"
                  type="number"
                  className="input"
                  value={price}
                  onChange={handlePriceChange}
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
