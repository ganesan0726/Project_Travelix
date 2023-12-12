import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import HotelList from "../Components/HotelList";
import HotelSearch from "../Components/HotelSearch";
import axios from "axios";

const Hotel = () => {
  const baseURL = "https://travelix-backend-ngxp.onrender.com/api/";

  const [listHotels, setListHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllHotels();
  }, []);

  const getAllHotels = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}list/hotelLists`);
      console.log(response.data)
      setListHotels(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const searchHotelApi = async (filterHotels) => {
    try {
      if (
        !filterHotels ||
        (filterHotels.hotelLocation && filterHotels.hotelLocation === "")
      ) {
        getAllHotels();
      } else {
        setLoading(true);
        const response = await axios.get(
          `${baseURL}list/hotelLists?hotelLocation=${filterHotels.hotelLocation}`,
        );
        setListHotels(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const LoadingSpinner = () => <div className="loader"></div>;

  return (
    <>
      <Header />

      <section
        className="hero-wrap hero-wrap-2 js-fullheight"
        style={{ backgroundImage: `url(${require("../images/bg_1.jpg")})` }}
      >
        <div className="overlay js-fullheight"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
            <div className="col-md-9 pb-5 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link to="/">
                    Home <i className="fa fa-chevron-right"></i>
                  </Link>
                </span>{" "}
                <span>
                  Hotel <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Hotel</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="search-wrap-1">
                <HotelSearch callBack={searchHotelApi} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            {loading ? (
              <LoadingSpinner />
            ) : (
              listHotels.map((value, index) => {
                return (
                  <HotelList key={index} value={value} />
                )
              })
            )}
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <a href="/">&lt;</a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="/">2</a>
                  </li>
                  <li>
                    <a href="/">3</a>
                  </li>
                  <li>
                    <a href="/">4</a>
                  </li>
                  <li>
                    <a href="/">5</a>
                  </li>
                  <li>
                    <a href="/">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Hotel;
