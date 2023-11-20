import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import HotelList from "../Components/HotelList";
import HotelSearch from "../Components/HotelSearch";

const Hotel = () => {
  const hotel_List = [
    {
      hotel_image : require("../images/hotel-resto-1.jpg"),
      hotel_price : 300,
      hotel_stay : 8,
      hotel_name : "Sai Beach Resort",
      hotel_location : "Mumbai, India",
      hotel_washRoom : 2,
      hotel_bed : 3
    },
    {
      hotel_image : require("../images/hotel-resto-2.jpg"),
      hotel_price : 500,
      hotel_stay : 10,
      hotel_name : "LeMerdian",
      hotel_location : "Switzerland",
      hotel_washRoom : 3,
      hotel_bed : 4
    },
    {
      hotel_image : require("../images/hotel-resto-3.jpg"),
      hotel_price : 300,
      hotel_stay : 8,
      hotel_name : "Royal Palace",
      hotel_location : "Rome",
      hotel_washRoom : 2,
      hotel_bed : 3
    },
    {
      hotel_image : require("../images/hotel-resto-4.jpg"),
      hotel_price : 300,
      hotel_stay : 8,
      hotel_name : "Hilton",
      hotel_location : "Japan",
      hotel_washRoom : 2,
      hotel_bed : 3
    },
    {
      hotel_image : require("../images/hotel-resto-5.jpg"),
      hotel_price : 300,
      hotel_stay : 8,
      hotel_name : "Ceaser Hotel",
      hotel_location : "Vietnam",
      hotel_washRoom : 2,
      hotel_bed : 3
    },
    {
      hotel_image : require("../images/hotel-resto-6.jpg"),
      hotel_price : 300,
      hotel_stay : 8,
      hotel_name : "Hotel Don Carlton",
      hotel_location : "Dubai",
      hotel_washRoom : 2,
      hotel_bed : 3
    },
    {
      hotel_image : require("../images/hotel-resto-7.jpg"),
      hotel_price : 300,
      hotel_stay : 8,
      hotel_name : "Holiday Resort",
      hotel_location : "England",
      hotel_washRoom : 2,
      hotel_bed : 3
    },
    {
      hotel_image : require("../images/hotel-resto-8.jpg"),
      hotel_price : 300,
      hotel_stay : 8,
      hotel_name : "Stay High Hotel",
      hotel_location : "Norway",
      hotel_washRoom : 2,
      hotel_bed : 3
    },
    {
      hotel_image : require("../images/hotel-resto-9.jpg"),
      hotel_price : 300,
      hotel_stay : 8,
      hotel_name : "Snow Fall Resort",
      hotel_location : "Russia",
      hotel_washRoom : 2,
      hotel_bed : 3
    },
    
  ]


  const searchHotelApi = (filterHotels) => {
    console.log(filterHotels)
  }
  
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
            {hotel_List.map((list,index) => {
              return (
                <HotelList list={list} key={index} />
              )
            })}
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
