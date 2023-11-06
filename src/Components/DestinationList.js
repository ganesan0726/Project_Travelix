import React from "react";

const DestinationList = (props) => {
  return (
    <div className="col-md-4 m-btm-40">
      <div className="item">
        <div className="project-destination" key={props?.index}>
          <a
            href="/"
            className="img"
            style={{
              backgroundImage: `url(${props?.value?.tour_image})`,
            }}
          >
            <div className="text">
              <h3>{props?.value?.tour_location}</h3>
              <span>{props?.value?.tour_count} Places</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DestinationList;
