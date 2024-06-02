import React, { useState } from "react";
import DateFormat from "../Home/GuestList/DateFormat/DateFormat";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GuestUpdateList = ({ guestList, editGuestInfo }) => {
  const navigate = useNavigate();
  const handleEdit = (guest) => {
    editGuestInfo(guest);
    navigate("/editguestform");
  };

  return (
    <>
      <div className=" flex justify-center items-center p-8">
        <div className=" bg-custom-white rounded-lg p-4">
          <h1 className=" text-2rem font-Outfit">Guests List</h1>
          <table className="font-Outfit border-separate border-spacing-y-[15px] border-spacing-x-[20px]">
            <thead className="text-xl">
              <tr>
                <th>Guest ID</th>
                <th>Name</th>
                <th>CNIC</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {guestList.map((data, index) => {
                return (
                  <tr key={index} className="text-lg">
                    <td>{data.guest_id}</td>
                    <td>{data.name}</td>
                    <td>{data.cnic_id}</td>
                    <td>
                      <DateFormat date={data.check_in_date} />
                    </td>
                    <td>
                      <DateFormat date={data.check_out_date} />
                    </td>
                    <td>{data.total_amount}</td>
                    <td>
                      <button
                        onClick={handleEdit(data)}
                        className=" bg-button-yellow px-4 py-1 font-Outfit text-sm rounded-md"
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button className=" bg-button-red px-4 py-1 font-Outfit text-sm rounded-md text-custom-white">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default GuestUpdateList;
