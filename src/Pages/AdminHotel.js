import axios from "axios"
import React,{useState,useEffect} from 'react';
import "../css/adminStyle.css"

const AdminHotel = () => {

  const [hotelList, updateHotelLists] = useState({
    hotelName : "",
    locationName : "",
    stayCount : "",
    washRoomCount : "",
    bedCount : "",
    price : "",
    hotelImage : "",
  })

  const [listHotels, UpdateListHotels] = useState([]);

  // Fetch Hotels List
  useEffect(() => {
    loadListHotels()
  },[]);

  const loadListHotels = () => {
    const url = "http://localhost:4000/api/list/hotelLists";
    axios.get(url)
    .then((response) => { 
      UpdateListHotels(response.data);
      console.log(hotelList);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const handleInputFields = (event) => {
    updateHotelLists({...hotelList, [event.target.id] : event.target.value})
  }

  
  const AddHotels = () => {
    console.log(hotelList);
    const url = "http://localhost:4000/api/upload/hotelLists";

    axios.post(url,hotelList)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const uploadImage = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];
    
    reader.readAsDataURL(file);

    reader.onload = () =>{
      updateHotelLists({...hotelList, [event.target.id] : reader.result})
    }
  }

  return (
    <div className="container">
      <h3>Admin Hotel Details</h3>
      <div>
        <label>Enter Hotel Name</label>
        <input type="text" placeholder="Destination Name" id="hotelName" onChange={handleInputFields} />
      </div>
      <div>
        <label>Enter Hotel Location</label>
        <input type="text" placeholder="Location Name" id="locationName" onChange={handleInputFields}  />
      </div>

      <div>
        <label>Enter Hotel Stay Count</label>
        <input type="number" placeholder="Hotel Stay Count" id="stayCount" onChange={handleInputFields} />
      </div>
      <div>
        <label>Enter WashRooms Counts</label>
        <input type="number" placeholder="WashRoom Counts" id="washRoomCount" onChange={handleInputFields} />
      </div>
      <div>
        <label>Enter Bed Counts</label>
        <input type="number" placeholder="Bed Counts" id="bedCount" onChange={handleInputFields}  />
      </div>
      <div>
        <label>Enter Price</label>
        <input type="number" placeholder="Price" id="price" onChange={handleInputFields} />
      </div>
      <div>
        <label>Upload Hotel Image</label>
        <input type="file" accept=".png,.jpg,.jpeg" id="hotelImage" onChange={uploadImage} />
      </div>
      <button onClick={() => AddHotels()} >Add Hotel</button>
      <br />
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
          </tr>
        </thead>
        <tbody>
          {
            listHotels.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.hotelName}</td>
                  <td>{value.locationName}</td>
                  <td>{value.stayCount}</td>
                  <td>{value.washRoomCount}</td>
                  <td>{value.bedCount}</td>
                  <td>{value.price}</td>
                  <td><img src={value.hotelImage} alt="hotelImage" width= "50" /> </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default AdminHotel;