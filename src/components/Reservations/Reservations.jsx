import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: "",
    day: "",
  });

  const navigate = useNavigate ();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("reservationData", JSON.stringify(formData));
    navigate("/");
  };

  return (
    <div>
      <h2>Reservations</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Reservation Day:
          <input
            type="text"
            name="day"
            value={formData.day}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Save Reservation</button>
      </form>
    </div>
  );
};

export default Reservations;
