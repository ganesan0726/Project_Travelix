import React, { useState } from "react";

const HotelSearch = (props) => {
  const [hotelSearch, setHotelSearch] = useState({
    hotel_location: "",
    hotel_checkIn_date: "",
    hotel_checkOut_date: "",
    hotel_price: "",
  });

  const handleInput = (event) => {
    setHotelSearch({...hotelSearch, [event.target.id] : event.target.value});
  }

  const searchHotels = () => {
    props?.callBack(hotelSearch);
  }

  return (
    <div
      className="tab-pane show active"
      id="v-pills-1"
      role="tabpanel"
      aria-labelledby="v-pills-nextgen-tab"
    >
      <form action="#" className="search-property-1" id="search">
        <div className="row no-gutters">
          <div className="col-md d-flex">
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
                  id="hotel_location"
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>
          <div className="col-md d-flex">
            <div className="form-group p-4">
              <label htmlFor="#">Check-in date</label>
              <div className="form-field">
                <div className="icon">
                  <span className="fa fa-calendar"></span>
                </div>
                <input
                  type="date"
                  className="form-control checkin_date"
                  name="begin"
                  placeholder="dd-mm-yyyy"
                  id="hotel_checkIn_date"
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>
          <div className="col-md d-flex">
            <div className="form-group p-4">
              <label htmlFor="#">Check-out date</label>
              <div className="form-field">
                <div className="icon">
                  <span className="fa fa-calendar"></span>
                </div>
                <input
                  type="date"
                  className="form-control checkout_date"
                  placeholder="dd-mm-yyyy"
                  id="hotel_checkOut_date"
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>
          <div className="col-md d-flex">
            <div className="form-group p-4">
              <label htmlFor="#">Price Limit</label>
              <div className="form-field">
                <div className="select-wrap">
                  <div className="icon">
                    <span className="fa fa-chevron-down"></span>
                  </div>
                  <select name="" id="hotel_price" className="form-control" onChange={handleInput}>
                    <option >$100</option>
                    <option >$10,000</option>
                    <option >$50,000</option>
                    <option >$100,000</option>
                    <option >$200,000</option>
                    <option >$300,000</option>
                    <option >$400,000</option>
                    <option >$500,000</option>
                    <option >$600,000</option>
                    <option >$700,000</option>
                    <option >$800,000</option>
                    <option >$900,000</option>
                    <option >$1,000,000</option>
                    <option >$2,000,000</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md d-flex">
            <div className="form-group d-flex w-100 border-0">
              <div className="form-field w-100 align-items-center d-flex">
                <input
                  type="button"
                  value="Search"
                  className="align-self-stretch form-control btn btn-primary"
                  onClick={() => searchHotels()}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HotelSearch;
