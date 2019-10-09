import React, { useState } from 'react';
// import useForm from "react-hook-form";
import { connect } from 'react-redux';

import { postSmurf } from '../actions';

const MakeSmurf = props => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    console.log(formData);
    return setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <div className="form">
      <h3>Add a Smurf to the Village</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}></input>
      <input
        type="text"
        name="height"
        placeholder="Height"
        onChange={handleChange}></input>
      <input
        type="text"
        name="age"
        placeholder="Age"
        onChange={handleChange}></input>
      <button onClick={() => props.postSmurf(formData)}>Add Smurf</button>
    </div>
  );
}

export default connect(
  null, { postSmurf: postSmurf })(MakeSmurf);