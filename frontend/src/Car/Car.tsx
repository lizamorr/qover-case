import axios, { AxiosError } from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import { quote } from "../store/quoteSlice";
import { useNavigate } from "react-router-dom";
import { ICarModel, IOption } from "./types";
import { useDispatch } from "react-redux";

export const Car = () => {
  const [age, setAge] = useState(0);
  const [selectedCarId, setSelectedCarId] = useState("");
  const [cars, setCars] = useState<IOption[]>([]);
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getCars = async (): Promise<void> => {
      axios
        .get("/cars", {
          baseURL: process.env.REACT_APP_NESTJS_BASE_URL,
          headers: {
            Authorization: "bearer " + localStorage.getItem("jwt") || "",
          },
        })
        .then((res) =>
          setCars(
            res.data.map((car: ICarModel) => ({
              label: car.model,
              value: car._id,
            }))
          )
        )
        .catch((error: AxiosError) => {
          if (error.response?.status === 401) {
            alert("Unauthorized user");
            navigate("/");
          } else {
            alert("Error receiving cars. Please try again.");
          }
        });
    };
    getCars();
  }, []);

  const handleAgeChange = (e: any) => {
    setAge(e.target.value);
  };
  const handleCarSelectionChange = (e: any) => {
    setSelectedCarId(e.target.value);
  };
  const handlePriceChange = (e: any) => {
    setPrice(e.target.value);
  };

  const handleFormSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    axios.defaults.baseURL = process.env.REACT_APP_NESTJS_BASE_URL;
    axios
      .post(
        "/quote/getQuote",
        { selectedCarId, age, price },
        {
          headers: {
            Authorization: "bearer " + localStorage.getItem("jwt") || "",
          },
        }
      )
      .then((quoteRes) => {
        dispatch(quote(quoteRes.data.yearlyPrice));
        navigate("/quote");
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === 401) {
          alert("Unauthorized user");
          navigate("/");
        } else {
          alert("Cannot get a quote. Please try again.");
        }
      });
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
                  value={selectedCarId}
                  onChange={handleCarSelectionChange}
                  required
                >
                  <option hidden disabled value=""></option>
                  {cars.map((car) => (
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
                <div className="car__card-price">
                  <input
                    name="price"
                    type="number"
                    className="input"
                    value={price}
                    onChange={handlePriceChange}
                    required
                  />
                  <span className="euro">&euro;</span>
                </div>
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
