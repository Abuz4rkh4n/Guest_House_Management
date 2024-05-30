import React from "react";

const RoomsInfo = ({ rooms }) => {
  return (
    <div>
      <table className="font-Outfit border-separate border-spacing-2 border-spacing-x-8">
        <thead className="text-xl">
          <tr>
            <th>Room No</th>
            <th>Room ID</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="text-lg">
          {rooms.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.room_number}</td>
                <td>{data.room_id}</td>
                <td>{data.price}</td>
                <td>
                  {data.status === "Reserved" ? (
                    <div className="bg-yellow-400 rounded-md py-1 px-2 text-center text-sm">
                      {data.status}
                    </div>
                  ) : (
                    <div className=" bg-green-500 rounded-md py-1 px-2 text-center text-sm">
                      {data.status}
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RoomsInfo;
