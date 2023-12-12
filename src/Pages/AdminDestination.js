import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../css/adminStyle.css";

const AdminDestination = () => {
  const baseURL = "https://travelix-backend-ngxp.onrender.com/api/";

  const [destination, setDestination] = useState({
    destinationName: "",
    destinationCount: "",
    destinationImage: null, // Initialize as null
  });

  const [destinationList, setDestinationList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(null); // Use null for initial state
  const fileInput = useRef();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}list/destination`);
      setDestinationList(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const AddNewDestination = async () => {
    setLoading(true);
    const url = `${baseURL}upload/destination`;

    try {
      const response = await axios.post(url, destination);
      setLoading(false);
      setShowPopup({
        success: true,
        message: response.data.message,
        data: response.data.destination,
      });
      setDestination({
        destinationName: "",
        destinationCount: "",
      });
      fileInput.current.value = "";
      fetchData();
    } catch (error) {
      setLoading(false);
      setShowPopup({
        error: true,
        message: "Failed to add data.",
        data: null,
      });
    }
  };

  const deleteDestination = async (id) => {
    setLoading(true);
    const url = `${baseURL}delete/destination/${id}`;

    try {
      const response = await axios.delete(url);
      setLoading(false);
      setShowPopup({
        success: true,
        message: response.data.message,
      });
      fetchData();
    } catch (error) {
      setLoading(false);
      setShowPopup({
        error: true,
        message: "Failed to delete data.",
        data: null,
      });
    }
  };

  const handleInputField = (event) => {
    setDestination({
      ...destination,
      [event.target.id]: event.target.value,
    });
  };

  const uploadImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setDestination({
          ...destination,
          destinationImage: reader.result,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const closePopup = () => {
    setShowPopup(null);
  };

  const LoadingSpinner = () => (
    <div className="loader">
    </div>
  );
  return (
    <div className="container">
      <h3>Admin Destinations</h3>
      <div>
        <label>Enter Destination Name</label>
        <input
          type="text"
          placeholder="Destination Name"
          id="destinationName"
          onChange={handleInputField}
          value={destination.destinationName}
        />
      </div>
      <div>
        <label>Enter Destination Tour Count</label>
        <input
          type="number"
          placeholder="Destination count"
          id="destinationCount"
          onChange={handleInputField}
          value={destination.destinationCount}
        />
      </div>
      <div>
        <label>Upload Destination Image</label>
        <input
          type="file"
          accept=".png,.jpg,.jpeg"
          id="destinationImage"
          onChange={uploadImage}
          ref={fileInput}
        />
      </div>
      <button onClick={() => AddNewDestination()} disabled={loading}>
        {loading ? "Adding..." : "Add Destination"}
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

      {loading ? (
        <LoadingSpinner />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Destination Name</th>
              <th>Destination Image</th>
              <th>Destination Count</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {destinationList.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.destinationName}</td>
                  <td>
                    <img src={value.destinationImage} alt="" width="50" />
                  </td>
                  <td>{value.destinationCount}</td>
                  <td>
                    <button onClick={() => deleteDestination(value.id)}>
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

export default AdminDestination;
