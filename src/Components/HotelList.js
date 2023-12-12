import React from "react";

const HotelList = (props) => {
  return (
    <div className="col-md-4"  >
      <div className="project-wrap hotel" key={props?.index}>
        <a
          href="/"
          className="img"
          style={{
            backgroundImage: `url(${props?.value?.hotelImage})`,
          }}
        >
          <span className="price">${props?.value?.hotelPrice}/person</span>
        </a>
        <div className="text p-4">
          <p className="star mb-2">
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </p>
          <span className="days">{props?.value?.hotelStayCount} Days Tour</span>
          <h3>
            <a href="/">{props?.value.hotelName}</a>
          </h3>
          <p className="location">
            <span className="fa fa-map-marker"></span> {props?.value?.hotelLocation}
          </p>
          <ul>
            <li>
              <span className="flaticon-shower"></span>{props?.value?.hotelWashRoom}
            </li>
            <li>
              <span className="flaticon-king-size"></span>{props?.value?.hotelBedCount}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
