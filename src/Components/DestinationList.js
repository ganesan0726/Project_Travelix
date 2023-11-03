import React from "react";

const DestinationList = ({ value,index }) => {
  return (
    <div className="col-md-4 m-btm-40">
      <div className="item">
        <div className="project-destination" key={index}>
          <a
            href="/"
            className="img"
            style={{
              backgroundImage: `url(${
                value
                  ? value.tour_image
                  : require("../images/destination-1.jpg")
              })`,
            }}
          >
            <div className="text">
              <h3>{value ? value.tour_location : "philipaines"}</h3>
              <span>{value ? value.tour_count : 10} Places</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DestinationList;
