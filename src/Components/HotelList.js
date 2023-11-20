import React from "react";

const HotelList = (props) => {
  return (
    <div className="col-md-4"  >
      <div className="project-wrap hotel" key={props?.index?.hotel_name}>
        <a
          href="/"
          className="img"
          style={{
            backgroundImage: `url(${props?.list?.hotel_image})`,
          }}
        >
          <span className="price">${props?.list?.hotel_price}/person</span>
        </a>
        <div className="text p-4">
          <p className="star mb-2">
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </p>
          <span className="days">{props?.list?.hotel_stay} Days Tour</span>
          <h3>
            <a href="/">{props?.list.hotel_name}</a>
          </h3>
          <p className="location">
            <span className="fa fa-map-marker"></span> {props?.list?.hotel_location}
          </p>
          <ul>
            <li>
              <span className="flaticon-shower"></span>{props?.list?.hotel_washRoom}
            </li>
            <li>
              <span className="flaticon-king-size"></span>{props?.list?.hotel_bed}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
