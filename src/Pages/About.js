import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Service from "../Components/Service";

const About = () => {
  return (
    <>
      <Header />

      <section
        className="hero-wrap hero-wrap-2 js-fullheight"
        style={{
          backgroundImage: `url(${require("../images/services-2.jpg")})`,
        }}
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
                  About us <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">About Us</h1>
            </div>
          </div>
        </div>
      </section>

      <Service />

      <section
        class="ftco-section ftco-about img"
        style={{ backgroundImage: `url(${require("../images/bg_4.jpg")})` }}
      >
        <div class="overlay"></div>
        <div class="container py-md-5">
          <div class="row py-md-5"></div>
        </div>
      </section>

      <section class="ftco-section ftco-about ftco-no-pt img">
        <div class="container">
          <div class="row d-flex">
            <div class="col-md-12 about-intro">
              <div class="row">
                <div class="col-md-6 d-flex align-items-stretch">
                  <div
                    class="img d-flex w-100 align-items-center justify-content-center"
                    style={{
                      backgroundImage: `url(${require("../images/about-1.jpg")})`,
                    }}
                  ></div>
                </div>
                <div class="col-md-6 pl-md-5 py-5">
                  <div class="row justify-content-start pb-3">
                    <div class="col-md-12 heading-section">
                      <span class="subheading">About Us</span>
                      <h2 class="mb-4">
                        Make Your Tour Memorable and Safe With Us
                      </h2>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                      <p>
                        <a href="/destination" class="btn btn-primary">
                          Book Your Destination
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
