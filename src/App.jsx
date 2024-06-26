import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import GuestForm from "./components/GuestFrom/GuestForm";
import { Route, Routes } from "react-router-dom";
import Invoice from "./components/Invoice/Invoice";
import GuestUpdateList from "./components/GuestUpdateList/GuestUpdateList";
import EditForm from "./components/GuestUpdateList/EditForm/EditForm";

const App = () => {
  const [guestsList, setGuestsList] = useState([]);
  const [roomsList, setRoomsList] = useState([]);
  const [invoiceData, setInvoiceData] = useState(null);
  const [editGuestInfo, setEditGuestInfo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3036/guests")
      .then((res) => res.json())
      .then((data) => setGuestsList(data))
      .catch((err) => console.log(err));
    fetch("http://localhost:3036/rooms")
      .then((res) => res.json())
      .then((data) => setRoomsList(data))
      .catch((err) => console.log(err));
  }, []);

  const addData = (data) => {
    setInvoiceData(data);
  };

  const addEditGuestInfo = (data) => {
    setEditGuestInfo(data);
  };

  return (
    <div className="bg-slate-300 pb-4">
      <Routes>
        <Route
          path="/"
          element={<Home guestsList={guestsList} rooms={roomsList} />}
        />
        <Route path="/addguest" element={<GuestForm addData={addData} />} />
        <Route
          path="/invoice"
          element={<Invoice invoiceData={invoiceData} />}
        />
        <Route
          path="/editguestinfo"
          element={
            <GuestUpdateList
              guestList={guestsList}
              editGuestInfo={addEditGuestInfo}
            />
          }
        />
        <Route
          path="/editguestform"
          element={<EditForm editGuestInfo={editGuestInfo} />}
        />
      </Routes>
    </div>
  );
};

export default App;
