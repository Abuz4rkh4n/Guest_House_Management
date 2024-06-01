import React from "react";
import DateFormat from "./DateFormat/DateFormat";

const GuestList = ({ guestList }) => {
  return (
    <div>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GuestList;
