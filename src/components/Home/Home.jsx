import React, { useEffect, useState } from "react";
import RoomItems from "./RoomItems/RoomItems";
import totalRooms from "../../assets/Total_rooms.png";
import booked from "../../assets/Booked.png";
import remaining from "../../assets/Remaining.png";
import GuestList from "./GuestList/GuestList";
import RoomsInfo from "./RoomsInfo/RoomsInfo";
import { Link } from "react-router-dom";

const Home = ({ guestsList, rooms }) => {
  const totalRoomsNo = rooms.length;
  let bookedNo = 0;

  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].status === "Reserved") {
      bookedNo++;
    }
  }

  const remainingNo = totalRoomsNo - bookedNo;

  const roomInfo = [
    {
      backgroundColor: "bg-custom-green",
      heading: "Total Rooms",
      icon: totalRooms,
      number: totalRoomsNo,
    },
    {
      backgroundColor: "bg-custom-blue",
      heading: "Booked",
      icon: booked,
      number: bookedNo,
    },
    {
      backgroundColor: "bg-custom-red",
      heading: "Remaining",
      icon: remaining,
      number: remainingNo,
    },
  ];

  return (
    <div className="flex justify-evenly items-start h-full">
      <div className="mt-8">
        <div className="flex w-6/12 justify-evenly items-center mb-14">
          {roomInfo.map((item, index) => (
            <div key={index} className="mr-8">
              <RoomItems
                backgroundColor={item.backgroundColor}
                heading={item.heading}
                icon={item.icon}
                number={item.number}
              />
            </div>
          ))}
        </div>
        <div className=" bg-custom-white w-65vw rounded-md h-[33vh] p-4 overflow-y-scroll overflow-x-hidden scrollbar-transparent">
          <div className="flex justify-start items-center mb-2">
            <h1 className=" font-Outfit text-2.5-rem">GUEST INFO</h1>
            <Link
              to={"/addguest"}
              className=" flex items-center justify-center w-40 h-9 bg-button-yellow rounded-md font-Outfit text-lg font-medium ml-20"
            >
              Add New Guest +
            </Link>
          </div>
          <div>
            <GuestList guestList={guestsList} />
          </div>
        </div>
      </div>
      <div className=" bg-custom-white rounded-md mt-8">
        <h1 className=" font-Outfit text-2rem ml-8">ROOMS LIST</h1>
        <RoomsInfo rooms={rooms} />
      </div>
    </div>
  );
};

export default Home;
