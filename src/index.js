const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth");
const equipmentRoutes = require("./routes/equipment");
const equipmentsRoutes = require("./routes/equipments");

dotenv.config();
const { PORT, ORIGIN, MONGO_URI } = process.env;
console.log({ PORT, ORIGIN, MONGO_URI });

const app = express();

// middlewares
app.use(cors({ origin: ORIGIN }));
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Found me!"));
app.use("/api/auth", authRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use("/api/equipments", equipmentsRoutes);

// connect to mongodb
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("connected to mongodb");

    app.listen(PORT || 5000, () => console.log(`Server running on port ${PORT || 5000}`));
  })
  .catch((error) => console.error("Mongodb connection error", error));
