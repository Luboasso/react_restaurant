import React, { useState } from "react";

const Reservations = ({ history }) => {
  const [formData, setFormData] = useState({
    name: "",
    day: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("reservationData", JSON.stringify(formData));
    history.push("/");
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
