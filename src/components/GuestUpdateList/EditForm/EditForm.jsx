import { useState } from "react";
import React from "react";

const EditForm = ({ editGuestInfo }) => {
  const [newGuest, setNewGuest] = useState({
    id: editGuestInfo.guest_id,
    name: editGuestInfo.name,
    cnic_id: editGuestInfo.cnic_id,
    check_in_date: editGuestInfo.check_in_date,
    check_out_date: editGuestInfo.check_out_date,
    total_amount: editGuestInfo.total_amount,
    items_price: editGuestInfo.items_price,
    days_staying: editGuestInfo.days_staying,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGuest({
      ...newGuest,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // axios
    //   .post("http://localhost:3036/addguest", newGuest)
    //   .then(navigate("/invoice"))
    //   .then((res) => {
    //     console.log(res.data);
    //     setNewGuest({
    //       name: "",
    //       cnic_id: "",
    //       check_in_date: "",
    //       check_out_date: "",
    //       total_amount: "",
    //       item_price: "",
    //       days_staying: "",
    //     });
    //   })
    //   .catch((err) => {
    //     console.error(
    //       "Error submitting form:",
    //       err.response || err.message || err
    //     );
    //   });
  };

  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-custom-white rounded-md w-[500px] py-12">
          <h1 className=" font-Outfit text-2rem mb-10">GUEST DETAILS</h1>
          <form onSubmit={handleSubmit} className="flex flex-col font-Outfit">
            <div className="w-90 m-2  flex items-center justify-between">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={newGuest.name}
                onChange={handleChange}
                className="form_input"
              />
            </div>
            <div className="w-90 m-2 flex items-center justify-between">
              <label htmlFor="cnic">CNIC</label>
              <input
                type="number"
                id="cnic"
                name="cnic_id"
                placeholder="CNIC"
                value={newGuest.cnic_id}
                onChange={handleChange}
                className="form_input"
              />
            </div>
            <div className="w-90 m-2 flex items-center justify-between">
              <label htmlFor="check_in">Check In Date</label>
              <input
                type="date"
                id="check_in"
                name="check_in_date"
                value={newGuest.check_in_date}
                onChange={handleChange}
                className="form_input"
              />
            </div>
            <div className="w-90 m-2 flex items-center justify-between">
              <label htmlFor="check_out">Check Out Date</label>
              <input
                type="date"
                id="check_out"
                name="check_out_date"
                value={newGuest.check_out_date}
                onChange={handleChange}
                className="form_input"
              />
            </div>
            <div className="w-90 m-2 flex items-center justify-between">
              <label htmlFor="price">Room Price</label>
              <input
                type="number"
                id="price"
                name="total_amount"
                placeholder="Room Price"
                value={newGuest.total_amount}
                onChange={handleChange}
                className="form_input"
              />
            </div>
            <div className="w-90 m-2 flex items-center justify-between">
              <label htmlFor="items">Items Price</label>
              <input
                type="number"
                id="items"
                name="items_price"
                placeholder="Items Price"
                value={newGuest.items_price}
                onChange={handleChange}
                className="form_input"
              />
            </div>
            <div className="w-90 m-2 flex items-center justify-between">
              <label htmlFor="days">Total Staying Days</label>
              <input
                type="number"
                id="days"
                name="days_staying"
                placeholder="Total Staying Days"
                value={newGuest.days_staying}
                onChange={handleChange}
                className="form_input"
              />
            </div>
            <button
              type="submit"
              className="bg-button-yellow rounded-md p-1 mt-8 text-center"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
