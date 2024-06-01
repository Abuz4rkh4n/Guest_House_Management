import React from "react";

const DateFormat = ({ date }) => {
  const newDateFormat = new Date(date);

  const day = newDateFormat.getUTCDate();
  const month = newDateFormat.getUTCMonth() + 1;
  const year = newDateFormat.getUTCFullYear();

  const formattedDay = day.toString().padStart(2, "0");
  const formattedMonth = month.toString().padStart(2, "0");

  const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;
  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
};

export default DateFormat;
