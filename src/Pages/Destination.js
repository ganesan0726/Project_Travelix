import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import DestinationList from "../Components/DestinationList";
import TourSearch from "../Components/TourSeach";
import axios from "axios";

const Destination = () => {
  const baseURL = "https://travelix-backend-ngxp.onrender.com/api/";

  const [destinationsList, setDestinationsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllDestinations();
  }, []);

  const getAllDestinations = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}list/destination`);
      setDestinationsList(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const searchTour = async (filterValue) => {
    try {
      if (
        !filterValue ||
        (filterValue.destination && filterValue.destination === "")
      ) {
        getAllDestinations();
      } else {
        setLoading(true)
        const response = await axios.get(
          `${baseURL}list/destination?destinationName=${filterValue.destination}`,
        );
        setDestinationsList(response.data);
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
        style={{ backgroundImage: `url(${require("../images/bg_4.jpg")})` }}
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
                  Tour List <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Tours List</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="search-wrap-1">
                <TourSearch callBack={searchTour} />
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
              destinationsList.map((value, index) => {
                return <DestinationList key={index} value={value} />;
              })
            )}
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <a href="/destination">&lt;</a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="/destination">2</a>
                  </li>
                  <li>
                    <a href="/destination">3</a>
                  </li>
                  <li>
                    <a href="/destination">4</a>
                  </li>
                  <li>
                    <a href="/destination">5</a>
                  </li>
                  <li>
                    <a href="/destination">&gt;</a>
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

export default Destination;
