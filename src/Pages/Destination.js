import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import DestinationList from "../Components/DestinationList";

const Destination = () => {
  const destinationList = [
    {
      tour_location: "India",
      tour_image:
        "https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg",
      tour_count: 10,
    },
    {
      tour_location: "Switzerland",
      tour_image:
        "https://cdn.pixabay.com/photo/2012/10/25/23/18/train-62849_1280.jpg",
      tour_count: 5,
    },
    {
      tour_location: "Rome",
      tour_image:
        "https://cdn.pixabay.com/photo/2020/05/17/12/56/rome-5181486_1280.jpg",
      tour_count: 6,
    },
    {
      tour_location: "Japan",
      tour_image:
        "https://cdn.pixabay.com/photo/2016/11/19/21/29/temple-1841296_1280.jpg",
      tour_count: 12,
    },
    {
      tour_location: "Vietnam",
      tour_image:
        "https://cdn.pixabay.com/photo/2015/09/25/11/24/halong-bay-957183_1280.jpg",
      tour_count: 3,
    },
    {
      tour_location: "Dubai",
      tour_image:
        "https://cdn.pixabay.com/photo/2016/01/04/06/26/dubai-1120373_1280.jpg",
      tour_count: 15,
    },
    {
      tour_location: "England",
      tour_image:
        "https://cdn.pixabay.com/photo/2016/11/29/02/12/architecture-1866767_1280.jpg",
      tour_count: 10,
    },
    {
      tour_location: "Norway",
      tour_image:
        "https://cdn.pixabay.com/photo/2017/06/12/11/24/norway-2395221_1280.jpg",
      tour_count: 10,
    },
    {
      tour_location: "Russia",
      tour_image:
        "https://cdn.pixabay.com/photo/2018/03/13/12/55/water-3222480_1280.jpg",
      tour_count: 10,
    },
  ];
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
                <form action="#" className="search-property-1">
                  <div className="row no-gutters">
                    <div className="col-lg d-flex">
                      <div className="form-group p-4 border-0">
                        <label htmlFor="#">Destination</label>
                        <div className="form-field">
                          <div className="icon">
                            <span className="fa fa-search"></span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search place"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg d-flex">
                      <div className="form-group p-4 border-0">
                        <label htmlFor="#">Location/Area</label>
                        <div className="form-field">
                          <div className="icon">
                            <span className="fa fa-location-arrow"></span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search place"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg d-flex">
                      <div className="form-group d-flex w-100 border-0">
                        <div className="form-field w-100 align-items-center d-flex">
                          <input
                            type="submit"
                            value="Search"
                            className="align-self-stretch form-control btn btn-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            {destinationList.map((value, index) => {
              return (
                <DestinationList value={value} index={index} />
              )
            })}
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
