import React from "react";

const HotelList = (props) => {
  return (
    <div class="col-md-4" key={props?.index}>
      <div class="project-wrap hotel">
        <a
          href="/"
          class="img"
          style={{
            backgroundImage: `url(${props?.list?.hotel_image})`,
          }}
        >
          <span class="price">${props?.list?.hotel_price}/person</span>
        </a>
        <div class="text p-4">
          <p class="star mb-2">
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </p>
          <span class="days">{props?.list?.hotel_stay} Days Tour</span>
          <h3>
            <a href="/">{props?.list.hotel_name}</a>
          </h3>
          <p class="location">
            <span class="fa fa-map-marker"></span> {props?.list?.hotel_location}
          </p>
          <ul>
            <li>
              <span class="flaticon-shower"></span>{props?.list?.hotel_washRoom}
            </li>
            <li>
              <span class="flaticon-king-size"></span>{props?.list?.hotel_bed}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
