import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "../css/adminStyle.css";

const AdminHotel = () => {
  const baseURL = "https://travelix-backend-ngxp.onrender.com/api/";

  const [hotelList, updateHotelLists] = useState({
    hotelName: "",
    locationName: "",
    stayCount: "",
    washRoomCount: "",
    bedCount: "",
    price: "",
    hotelImage: "",
  });

  const [listHotels, UpdateListHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [showPopup, setShowPopup] = useState(null);
  const fileInput = useRef();

  // Fetch Hotels List
  useEffect(() => {
    loadListHotels();
  }, []);

  const loadListHotels = async () => {
    try {
      setLoadingSpinner(true);
      const response = await axios.get(`${baseURL}list/hotelLists`);
      UpdateListHotels(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingSpinner(false);
    }
  };

  const AddHotels = async () => {
    setLoading(true);
    const url = `${baseURL}upload/hotelLists`;

    try {
      const response = await axios.post(url, hotelList);
      setLoading(false);
      setShowPopup({
        success: true,
        message: response.data.message,
        data: response.data.hotelList,
      });
      updateHotelLists({
        hotelName: "",
        locationName: "",
        stayCount: "",
        washRoomCount: "",
        bedCount: "",
        price: "",
      });
      fileInput.current.value = "";
      loadListHotels();
    } catch (error) {
      setLoading(false);
      setShowPopup({
        error: true,
        message: "Failed to Add data",
        data: null,
      });
    }
  };

  const deleteHotelList = async (id) => {
    setLoading(true);
    const url = `${baseURL}delete/hotelLists/${id}`;
    try {
      const response = await axios.delete(url);
      setLoading(false);
      setShowPopup({
        success: true,
        message: response.data.message,
      });
      loadListHotels();
    } catch (error) {
      setLoading(false);
      setShowPopup({
        error: true,
        message: "Failed to delete data.",
        data: null,
      });
    }
  };

  const handleInputFields = (event) => {
    updateHotelLists({ ...hotelList, [event.target.id]: event.target.value });
  };

  const uploadImage = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.readAsDataURL(file);

    reader.onload = () => {
      updateHotelLists({ ...hotelList, [event.target.id]: reader.result });
    };
  };

  const closePopup = () => {
    setShowPopup(null);
  };

  const LoadingSpinner = () => <div className="loader"></div>;

  return (
    <div className="container">
      <h3>Admin Hotel Details</h3>
      <div>
        <label>Enter Hotel Name</label>
        <input
          type="text"
          placeholder="Destination Name"
          id="hotelName"
          onChange={handleInputFields}
          value={hotelList.hotelName}
        />
      </div>
      <div>
        <label>Enter Hotel Location</label>
        <input
          type="text"
          placeholder="Location Name"
          id="locationName"
          onChange={handleInputFields}
          value={hotelList.locationName}
        />
      </div>

      <div>
        <label>Enter Hotel Stay Count</label>
        <input
          type="number"
          placeholder="Hotel Stay Count"
          id="stayCount"
          onChange={handleInputFields}
          value={hotelList.stayCount}
        />
      </div>
      <div>
        <label>Enter WashRooms Counts</label>
        <input
          type="number"
          placeholder="WashRoom Counts"
          id="washRoomCount"
          onChange={handleInputFields}
          value={hotelList.washRoomCount}
        />
      </div>
      <div>
        <label>Enter Bed Counts</label>
        <input
          type="number"
          placeholder="Bed Counts"
          id="bedCount"
          onChange={handleInputFields}
          value={hotelList.bedCount}
        />
      </div>
      <div>
        <label>Enter Price</label>
        <input
          type="number"
          placeholder="Price"
          id="price"
          onChange={handleInputFields}
          value={hotelList.price}
        />
      </div>
      <div>
        <label>Upload Hotel Image</label>
        <input
          type="file"
          accept=".png,.jpg,.jpeg"
          id="hotelImage"
          onChange={uploadImage}
          ref={fileInput}
        />
      </div>
      <button onClick={() => AddHotels()} disabled={loading}>
        {loading ? "Adding..." : "Add Hotel"}
      </button>
      {showPopup && (
        <>
          <div className={`blur-background ${showPopup && "show"}`}></div>
          <div
            className={`popup ${showPopup.success ? "success" : "error"} ${
              showPopup && "show"
            }`}
          >
            <p>{showPopup.message}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </>
      )}
      <br />
      {loadingSpinner ? (
        <LoadingSpinner />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Hotel Name</th>
              <th>Location Name</th>
              <th>Stay count</th>
              <th>Wash Room Count</th>
              <th>Bed Count</th>
              <th>Price</th>
              <th>Hotel Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listHotels.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.hotelName}</td>
                  <td>{value.hotelLocation}</td>
                  <td>{value.hotelStayCount}</td>
                  <td>{value.hotelWashRoom}</td>
                  <td>{value.hotelBedCount}</td>
                  <td>${value.hotelPrice}</td>
                  <td>
                    <img src={value.hotelImage} alt="hotelImage" width="50" />{" "}
                  </td>
                  <td>
                    <button onClick={() => deleteHotelList(value.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminHotel;
