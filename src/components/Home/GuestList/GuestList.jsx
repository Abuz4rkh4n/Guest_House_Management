import React from "react";

const GuestList = ({ guestList }) => {
  return (
    <div>
      <table className="font-Outfit border-separate border-spacing-2 border-spacing-x-12">
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
                <td>{data.check_in_date}</td>
                <td>{data.check_out_date}</td>
                <td>{data.total_amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GuestList;
