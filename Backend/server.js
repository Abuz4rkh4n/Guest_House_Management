const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Abuzar9510",
  database: "guesthouseapp",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.get("/", (re, res) => {
  return res.json("From Backend Side");
});

// Guest Table Printing

app.get("/guests", (req, res) => {
  const sql = "select * from guests";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Room Table Printing

app.get("/rooms", (req, res) => {
  const sql = "select * from room";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// New Guest Adding

app.post("/addguest", (req, res) => {
  const {
    name,
    cnic_id,
    check_in_date,
    check_out_date,
    total_amount,
    items_price,
    days_staying,
  } = req.body;
  const sql = `insert into guests (name, cnic_id, check_in_date, 
    check_out_date, total_amount, items_price, days_staying) 
    values (?, ?, ?, ?, ?, ?, ?)`;
  db.query(
    sql,
    [
      name,
      cnic_id,
      check_in_date,
      check_out_date,
      total_amount,
      items_price,
      days_staying,
    ],
    (err, result) => {
      if (err) throw err;
      console.log("Guest Added");
    }
  );
});

app.listen(3036, () => {
  console.log("listening");
});
