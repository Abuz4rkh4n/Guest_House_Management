import React from "react";

const RoomItems = ({ backgroundColor, heading, icon, number }) => {
  return (
    <div>
      <div
        className={`flex ${backgroundColor} w-56 h-32 rounded-md justify-evenly items-center`}
      >
        <img className="w-20 h-20" src={icon} alt="Total Rooms" />
        <div>
          <h4 className="font-Outfit font-extrabold text-2.5-rem leading-10">
            {number}
          </h4>
          <h2 className="text-lg font-medium font-Outfit text-text-grey">
            {heading}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RoomItems;
