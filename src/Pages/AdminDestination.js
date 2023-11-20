import React, {useState} from 'react'

const AdminDestination = () => {

  const [destination, updateDestination] = useState({
    destinationName : "",
    destinationCount : "",
    destinationImage : ""
  })

  const handleInputField = (event) => {
    updateDestination({...destination, [event.target.id] : event.target.value })
  }

  const AddNewDestination = () =>{
    console.log(destination)
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
    <div>
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
    </div>
  )
}

export default AdminDestination;