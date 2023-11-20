import React,{useState} from 'react'

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

  const handleInputFields = (event) => {
    updateHotelLists({...hotelList, [event.target.id] : event.target.value})
  }

  const resetForm = () => {
    updateHotelLists({
      hotelName: "",
      locationName: "",
      stayCount: "",
      washRoomCount: "",
      bedCount: "",
      price: "",
      hotelImage: "",
    });
  };
  
  const AddHotels = () => {
    console.log(hotelList);
  
    // Call the resetForm function to clear the input fields
    resetForm();
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
    <div>
      <h3>Admin Destinations</h3>
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
    </div>
  )
}

export default AdminHotel