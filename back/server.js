const express = require("express");
const mongoose = require("mongoose");
const cors= require("cors");
const mainRoutes = require("./routes/mainRoutes");

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));

mongoose
    .connect("mongodb://localhost:27017/teamApp")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));


app.use("/", mainRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
