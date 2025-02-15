import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();
app.use(cors()); // Allow React to access API
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // Change if you set a password
  database: "mpcar",
});

// Test API route
app.get("/test-db", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1 + 1 AS solution");
    res.json({ success: true, message: "Connected to Database!", result: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: "Database Connection Failed", error });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
