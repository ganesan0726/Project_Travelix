import React, {useState,useEffect} from 'react';
import axios from "axios";
import '../css/adminStyle.css';

const AdminDestination = () => {

  const [destination, updateDestination] = useState({
    destinationName : "",
    destinationCount : "",
    destinationImage : ""
  })

  const [destinationList, updateDestinationList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/list/destination');
        updateDestinationList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleInputField = (event) => {
    updateDestination({...destination, [event.target.id] : event.target.value })  }

  const AddNewDestination = () =>{
    const url = "http://localhost:4000/api/upload/destination";

    axios.post(url, destination)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        alert(error.message);
      })
  }

  const uploadImage = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.readAsDataURL(file);

    reader.onload = () => {
      //console.log(reader.result);
      updateDestination({...destination, [event.target.id] : reader.result})
    }
  }

  return (
    <div className="container">
      <h3>Admin Destinations</h3>
      <div>
        <label>Enter Destination Name</label>
        <input type="text" placeholder="Destination Name" id="destinationName" onChange={handleInputField} />
      </div>
      <div>
        <label>Enter Destination Tour Count</label>
        <input type="number" placeholder="Destination count" id="destinationCount" onChange={handleInputField} />
      </div>
      <div>
        <label>Upload Destination Image</label>
        <input type="file" accept=".png,.jpg,.jpeg" id="destinationImage" onChange={uploadImage} />
      </div>
      <button onClick={() => AddNewDestination()}>Add Destination</button>
      <table>
        <thead>
          <tr>
            <th>Destination Name</th>
            <th>Destination Image</th>
            <th>Destination Count</th>
          </tr>
        </thead>
        <tbody>
          {
            destinationList.map((value, index) => {
              return(
                <tr key={index}>
                  <td>{value.destinationName}</td>
                  <td>
                    <img src={value.destinationImage} alt="" width="50" />
                  </td>
                  <td>{value.destinationCount}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default AdminDestination;