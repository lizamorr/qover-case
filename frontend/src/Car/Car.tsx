import axios, { AxiosError } from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import { quote } from "../store/quoteSlice";
import { useNavigate } from "react-router-dom";
import { ICarModel, InvalidQuoteError, IOption } from "./types";
import { useDispatch } from "react-redux";
import classNames from "classnames";

export const Car = () => {
  const [age, setAge] = useState(0);
  const [selectedCarId, setSelectedCarId] = useState("");
  const [cars, setCars] = useState<IOption[]>([]);
  const [price, setPrice] = useState(0);
  const [errors, setErrors] = useState<InvalidQuoteError[]>([]);

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
              key: car._id,
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

  const handleAgeChange = (e: any): void => {
    setAge(e.target.value);
  };
  const handleCarSelectionChange = (e: any): void => {
    setSelectedCarId(e.target.value);
  };
  const handlePriceChange = (e: any): void => {
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
      .catch((error) => {
        if (error.response?.status === 401) {
          alert("Unauthorized user");
          navigate("/");
        } else {
          setErrors(error.response?.data?.error);
        }
      });
  };

  const getError = (key: string): string => {
    const error = errors?.find((error) => error.key === key);
    return error ? error.message : "";
  };

  const removeValidationErrors = (key1: string, key2?: string): void => {
    if (errors.length > 0) {
      const updatedErrors = errors.filter(
        (error) => error.key !== key1 && error.key !== key2
      );
      setErrors(updatedErrors);
    }
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
                  type="text"
                  className={classNames(
                    "input",
                    `${
                      getError("minAge") || getError("risk")
                        ? "input--invalid"
                        : ""
                    }`
                  )}
                  onChange={handleAgeChange}
                  required
                  onFocus={() => removeValidationErrors("minAge", "risk")}
                />
                {getError("risk") && (
                  <div className="error">{getError("risk")}</div>
                )}
                {getError("minAge") && (
                  <div className="error">{getError("minAge")}</div>
                )}
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
                    type="text"
                    className={classNames(
                      "input",
                      `${
                        getError("price") || getError("price")
                          ? "input--invalid"
                          : ""
                      }`
                    )}
                    onChange={handlePriceChange}
                    onFocus={() => removeValidationErrors("price")}
                    required
                  />
                  <span
                    className={classNames(
                      "euro",
                      `${
                        getError("price") || getError("price")
                          ? "euro--red"
                          : ""
                      }`
                    )}
                  >
                    &euro;
                  </span>
                </div>
                {getError("price") && (
                  <div className="error">{getError("price")}</div>
                )}
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
