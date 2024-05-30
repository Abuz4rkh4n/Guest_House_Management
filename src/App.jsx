import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import GuestForm from "./components/GuestFrom/GuestForm";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [guestsList, setGuestsList] = useState([]);
  const [roomsList, setRoomsList] = useState([]);

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

  return (
    <div className=" bg-slate-300 h-100vh">
      <Routes>
        <Route
          path="/"
          element={<Home guestsList={guestsList} rooms={roomsList} />}
        />
        <Route path="/addguest" element={<GuestForm />} />
      </Routes>
    </div>
  );
};

export default App;
